console.warn('Worker:: self', self);
console.warn('Worker:: this', this);
console.warn('Worker:: self === this', this === self);

self.addEventListener('message', event => {
  postMessage(event.data);
  self.close();
});
