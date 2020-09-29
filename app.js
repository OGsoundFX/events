var Emitter = require('./emitter');

var emtr = new Emitter();


// now we are creating the prototype objects that are expecting 2 arguments: type, and
// a listener, which is the function in both cases bellow.
emtr.on('greet', function() {
    console.log('shit!');
});

emtr.on('greet', function() {
    console.log('oh no!');
});

// Now we call the emit prototype that iterates over all the functions that have a type: "greet"
emtr.emit('greet');


// other example, using node internal events
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');