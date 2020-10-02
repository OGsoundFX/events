let fs = require('fs');

const readable = fs.createReadStream(`${__dirname}/read.txt`);
// __dirname is the present directory

readable.on('data', function(chunk) {
    console.log(chunk);
});
// An event that is emitted by the read stream is 'data'
// chunk is the chunk of stream that will fill the maximum size of the buffer and that
// will be logged here. Depending on the size of the text, one or several chunks will
// be logged.


// { encoding: 'utf8' } converts the buffer into text.
// highWaterMark is the buffer size in kilobytes (1 kilobyte = 8 bits)
const readable2 = fs.createReadStream(`${__dirname}/read.txt`,
    { encoding: 'utf8' },
    { highWaterMark: 500 }
);

readable2.on('data', function(chunk) {
    console.log(chunk);
});


// now let's write the read text into the write.txt file
const writable = fs.createWriteStream(`${__dirname}/write.txt`)

readable2.on('data', function(chunk) {
    writable.write(chunk);
});