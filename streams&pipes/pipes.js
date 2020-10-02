let fs = require('fs');

const readable = fs.createReadStream(`${__dirname}/read.txt`);
const writable = fs.createWriteStream(`${__dirname}/write.txt`);

// similar to streams (see other files) this is the way to do it with pipes:

readable.pipe(writable);

// Creating a compressed file if a gzip format file.
let zlib = require('zlib');
let gzip = zlib.createGzip();
// creating a gzip variable, which is empty and serve as an intermediary
// before actually storing the information in the atuall .gz file

const compressed = fs.createWriteStream(`${__dirname}/compressed.gz`);

readable.pipe(gzip).pipe(compressed);