// os(operating system)
const os = require('os');

// hardware related
console.log(os.arch());
// x64 , computer er architecture ki seta jana jai

console.log(os.cpus()); 
// cpu system er all detail delhabe.

console.log(os.freemem());
// 792170496,  pc memory ki poriman khali ase seta dekhabe

console.log(os.networkInterfaces());
// network related all details pabo .


// operating system related 
console.log(os.hostname());
//DESKTOP-U2I0H3F, my pc name ata and pc er host name dekhte use hoi

console.log(os.homedir());
//C:\Users\hp , pc home directory name dekhte

console.log(os.type());
//Windows_NT , ata opareting system name bole dibe

console.log(os.userInfo());
// user info jana jai

