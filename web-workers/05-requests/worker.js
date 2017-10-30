importScripts('./ajax.js');

onmessage = function(event) {
  const urls = event.data;

  sendRequests(urls);
};
