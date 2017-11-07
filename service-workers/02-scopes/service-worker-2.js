self.addEventListener('install', event => console.error('install 2', event));
self.addEventListener('activate', event => console.error('activate 2', event));
self.addEventListener('message', event => console.error('message 2', event));
