const string = require('./string.cjs');

const obj = {
  math: require('./math.cjs'),
  string,
};
module.exports = obj;
