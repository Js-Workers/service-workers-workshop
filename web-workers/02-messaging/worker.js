self.addEventListener('message', event => {
  console.error('event', event);
  if (event.data.byteLength) {
    console.error(event.data.byteLength);
  }
  postMessage(event.data);
});
