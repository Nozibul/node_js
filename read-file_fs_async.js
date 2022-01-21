const fs  = require('fs');

// readfile func er 1st parameter hobe json file ter name ,
// 2nd parameter e call back func thakbe , call back er parameter hisebe
// err ta thakbe then data ta thakbe

fs.readFile('./test.json', (err, data)=>{ // test.json file data gulo read kore anbe ai file fs .
    if(err){
        return console.log(err)
    }

    let obj = JSON.parse(data);
    console.log(obj)
})

// output : { name: 'Nozibul', address: { home: 'satkhira', country: 'Bd' } }

// or
fs.readFile('myFile.txt', (err, data)=>{
    console.log(data.toString());
});
