const path = require('path');


// system file path
const fileCurrentPath = __filename ;
console.log(fileCurrentPath); // C:\projects\node JS\path.js

// basename
console.log(path.basename(fileCurrentPath)); // path.js , cureent file name ta dekhabe.

// directory name / dirname
console.log(path.basename(__dirname)); // node JS , amader main dir file silo node js and setai dekhasse

// extname 
console.log(path.extname(fileCurrentPath)); //.js , kono file er extension dekhte extname use hoi.


// format
let pathObj = {
    dir: 'user/local',
    name: 'something',
    ext : '.js'
}
console.log(path.format(pathObj)); // user/local\something.js , string er moto kore fili sob directory dekhalo


// isAbsolute 
console.log(path.isAbsolute(fileCurrentPath)); // true , thats means ai name kono file thakle true bolbe na thakle false bolbe .

console.log(path.isAbsolute('./people.js')); // false, bec current file er sathe people file relation na 


// join
console.log(path.join('user', 'local', 'nozibul', 'index.js'));
// user\local\nozibul\index.js , akta full file bania dilo.

// resolve
console.log(path.resolve('something', 'node.js'));
//C:\projects\node JS\something\node.js , akta full file dilo


// parse
console.log(path.parse(fileCurrentPath)); // ai fle er all details dekhabe.

/* 
 {
  root: 'C:\\',
  dir: 'C:\\projects\\node JS',
  base: 'path.js',
  ext: '.js',
  name: 'path'
 }
 */


