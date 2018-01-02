/* global self, caches, console, fetch */

'use strict';
const serverUrl = location.origin;
let version = '1',
    /* add server and static path to assets */
    assets = global.serviceWorkerOption.assets.map(asset => serverUrl + '/static' + asset),
    staticContent = [
        ...assets,
        '/manifest.json'
    ],
    /* create regex to test urls against */
    staticRegex = staticContent.length ?  new RegExp(staticContent.map(str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')).join('$|') + '$') : undefined;


function handle_fetch(event) {
    /* if static asset */
    if (staticRegex && staticRegex.test(event.request.url)) {
        event.respondWith(
            /* get current cache */
            caches.open(version)
            /* and get matching response */
            .then(cache => {
                return cache.match(event.request.clone());
            })
            /* if match => respond with match, otherwise trigger recaching of static assets and respond with live request */
            .then((res) => {
                if (res) {
                    return res;
                } else {
                    cacheStatic();
                    return fetch(event.request).catch(err => console.warn(err));
                }
            }).catch(err => console.warn(err))
        );
    }
}

function cacheStatic() {
    /* open cache */
    return caches.keys()
        /* delete all existing versions */
        .then(keys => Promise.all(keys.map(key => caches.delete(key))))
        .catch(err => console.log('error deleting cache', err))
        /* open new cache with current version */
        .then(() => caches.open(version))
        /* and add all static content */
        .then(function(cache) {
            return cache.addAll(staticContent);
        }).catch(err => console.warn(err));
}


self.addEventListener('fetch', handle_fetch);

/* handle install event, triggered on first install */
self.addEventListener('install', (event) => {
    /* fetch all static assets on first install */
    event.waitUntil(cacheStatic());
    /* activate service worker once done installing and dont wait for page reload */
    self.skipWaiting();
});

