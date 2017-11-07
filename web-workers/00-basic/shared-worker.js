// This is the code for: 'sharedWorker1.js' file
// Shared workers that handle the connections and Welcome each new script

let connections = 0; // count active connections

self.addEventListener('connect', event => {
  const [port] = event.ports;
  connections++;
  port.addEventListener('message', message => {
    console.error('connections', connections);

    port.postMessage(`Response: ${message.data}. Connections: ${connections}`);
  });
  port.start();
});

