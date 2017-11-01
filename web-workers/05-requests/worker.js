importScripts('./ajax.js');

onmessage = event => {
  const urls = event.data;

  sendRequests(urls);
};
