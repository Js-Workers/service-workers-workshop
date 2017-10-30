let connections = 0;

self.addEventListener('connect', event => {
  const [port] = event.ports;

  console.error('Shared worker port', port);
  connections++;
  port.addEventListener('message', e => {
    port.postMessage('Welcome to ' + e.data + ' (On port #' + connections + ')');
  });
  port.postMessage('sdfsdf');

  port.start();
});
