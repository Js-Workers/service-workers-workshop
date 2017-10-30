// http://2ality.com/2017/01/messagechannel.html
function createWorker (workerFunc) {
  if (!(workerFunc instanceof Function)) {
    throw new Error('Argument must be function');
  }
  const src = `(${workerFunc})();`;
  const blob = new Blob([src], {type: 'application/javascript'});
  const url = URL.createObjectURL(blob);
  return new Worker(url);
}
