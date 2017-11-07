self.addEventListener('install', event => console.error('install', event));
self.addEventListener('activate', event => console.error('activate', event));
self.addEventListener('message', event => console.error('message', event));
