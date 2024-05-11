const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.emit('newSale', () => {
  console.log('There was a sale.');
});

myEmitter.on('newSale', () => {
  console.log('Customer name: John');
});

myEmitter.emit('newSale', 9);

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});
