self.addEventListener('install', event => console.error('install', event));
self.addEventListener('activate', event => console.error('activate', event));
self.addEventListener('fetch', event => console.error('fetch', event));
self.addEventListener('sync', event => console.error('sync', event));
self.addEventListener('message', event => console.error('message', event));
self.addEventListener('push', event => console.error('push', event));
