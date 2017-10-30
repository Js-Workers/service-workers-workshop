self.addEventListener('message', event => {
  if (event.data.type === 'some error') {
    throw new Error('some error!');
  } else {
    postMessage(event.data);
  }
});
