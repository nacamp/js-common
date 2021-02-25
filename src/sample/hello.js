const _ = require('lodash');

const print = () =>{
  console.log( _.join(['a', 'b', 'c'], '~'));
  console.log('v0.0.4');
}
module.exports = {
  print,
};
