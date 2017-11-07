self.addEventListener('install', event => console.error('install', event));
self.addEventListener('activate', event => console.error('activate', event));

self.addEventListener('message', event => {
  const [port] = event.ports;

  port.postMessage('response from SW');
});
