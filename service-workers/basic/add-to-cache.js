const urls = [];

self.addEventListener('install', event => {
  console.log('The SW is now installed');

  event.waitUntil(caches.open('v1').then(cache => cache.addAll(urls)));
});

