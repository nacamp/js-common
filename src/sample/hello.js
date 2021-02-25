const fs = require('fs-extra')
const packageObj = fs.readJsonSync('../../package.json')

const print = () =>{
  console.log(packageObj.version);
  console.log('v0.0.4');
}
module.exports = {
  print,
};
