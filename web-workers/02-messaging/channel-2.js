let port;

self.addEventListener('message', event => {
  if (event.data.type === 'port') {
    port = event.data.port;

    port.addEventListener('message', e => {
      console.error('SW 2 received message', e.data);
    });

    setInterval(() => {
      console.error('SW 2 sent message');
      port.postMessage(fib(42));
      postMessage(fib(42));
      // postMessage('pong');
    }, 3000);

    port.start();
  }
});

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
