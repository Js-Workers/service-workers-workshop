self.addEventListener('message', event => {
  const app = {};

  app.connection = app.connection || new WebSocket('ws://demos.kaazing.com/echo');

  app.connection.addEventListener('message', message => {
    const {data} = message;
    console.error(`Response from WebSocket: ${data}`);
    postMessage(message.data);
  });

  app.connection.addEventListener('open', () => {
    app.connection.send(event.data);
  });
});
