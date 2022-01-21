const fs = require('fs');

// write file async

// create a object in data
const objData = {
    name: "Nozibul",
    address: {
        home: "satkhira",
        country: 'Bd'
    }
}

// data gulo k JSOn object convert korbo
const data = JSON.stringify(objData);

// then data gulo k write korbo async way te
// fs writeFile er 1st parameter hisebe file name , 
// then 2nd parameter data gulo jer vitore ter name,
// callback func bec data na pele error show korbe and data pele kisu bole dibo and 
// callback er parameter hisebe erro ta thakbe.

fs.writeFile('./test.json', data, (err)=>{ //ai file er data pathate write korte hoi.
    if(err){
        console.log(err);
    }
    else{
        console.log("File write/create successful")
    }
})

// or
fs.writeFileSync('myFile.txt', "Hello Node JS") // run korle myFilee name akta file create hobe

// same file er text er sathe kono text add korte
fs.appendFileSync('myFile.txt', " How are you ?")