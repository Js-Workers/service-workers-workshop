console.error('Worker', Worker);
self.addEventListener('message', event => {
  postMessage(event.data);
});
