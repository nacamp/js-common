const _ = require('lodash');

const print = () =>{
  console.log( _.join(['a', 'b', 'c'], '~'));
  console.log('use peerDependencies');
  console.log('v0.0.7');
}
module.exports = {
  print,
};
