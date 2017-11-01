console.error(1);
(async () => console.error(2))();
Promise.resolve(true).then(() => console.error(3));
setTimeout(() => console.error(4), 0);
