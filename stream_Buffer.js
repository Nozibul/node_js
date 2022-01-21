const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/stream.txt`);

// ourReadStream ata k event listen korbo and se amader k data dibe and callback func nibo seta theke amra chunk pabo
ourReadStream.on('data', (chunk)=>{
    console.log(chunk.toString())
});

console.log("Hello"); // age hello print korbe
