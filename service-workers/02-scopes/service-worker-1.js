self.addEventListener('install', event => console.error('install 1', event));
self.addEventListener('activate', event => console.error('activate 1', event));
self.addEventListener('message', event => console.error('message 1', event));
