const urls = [
  './',
  './index.html',
  './cat-dog.png'
];

self.addEventListener('install', event => {
  console.log('The SW is now installed');

  event.waitUntil(caches.open('v1').then(cache => cache.addAll(urls)));
});

self.addEventListener('activate', event => {
  console.log('The SW is now activated');
  event.waitUntil(
    caches.open(CACHE_VERSION).then(() => self.clients.claim())
  );
});


self.addEventListener('fetch', event => {
  const {request} = event;

  event.respondWith(caches.match(request));
});

