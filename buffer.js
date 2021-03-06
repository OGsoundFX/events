const { Buffer } = require("buffer");

// const buf = new Buffer('hello', 'utf8');
// this command has been deprecated for security reasons. The new command is Buffer.from

const buf = new Buffer.from('hello', 'utf8');

console.log(buf);
console.log(buf.toJSON().data);

buf.toJSON().data.forEach(element => {
    console.log(element.toString(2))
});

// testing without buf, to verify answer:
["h", "e", "l", "l", "o"].forEach(element => {
    console.log(element.charCodeAt(0).toString(2))
});

// overwritting. As we ca see in the log the buffer only stores 5 characters because of
// when we defined the buffer with "hello": 5 characters
buf.write("goodbye")
console.log(buf.toString());

// testing the to.String(2) converter method that converts a number into a binary.
// const num = 111;
// console.log(num.toString(2))
