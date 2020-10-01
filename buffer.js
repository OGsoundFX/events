const { Buffer } = require("buffer");

// const buf = new Buffer('hello', 'utf8');
// this command has been deprecated for security reasons

const buf = new Buffer.from('olivier', 'utf8');

console.log(buf);
console.log(buf.toJSON());