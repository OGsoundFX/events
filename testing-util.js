const util = require('util');

async function fn() {
  console.log('hello world');
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  return ret;
});