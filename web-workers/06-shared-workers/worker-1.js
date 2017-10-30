self.addEventListener('message', event => {
  console.error('Worker 1: ', event);

  // if (event.data === 'port') {
    const [port] = event.ports;

    console.error('port', port);

    port.addEventListener('message', e => {
      console.error('e', e);
      port.postMessage('message from SW-1');
    });

    port.postMessage('message from SW-1');

  // }
});
