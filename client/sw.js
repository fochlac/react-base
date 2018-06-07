/* global self, caches, console, fetch */
'use strict';

function handle_fetch(event) { }

/* handle fetch event, triggered on each ajax request */
self.addEventListener('fetch', handle_fetch);

/* handle install event, triggered on first install */
self.addEventListener('install', (event) => {
    /* activate service worker once done installing and dont wait for page reload */
    self.skipWaiting();
});

