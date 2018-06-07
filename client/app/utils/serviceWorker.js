import runtime from 'SW/runtime';

export const initServiceWorker = () => {
    if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
        return runtime.register()
            .catch(err => console.warn('serviceWorker error', err));
    }
};