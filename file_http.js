const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{ // server e user request pathabe
    fs.readFile('./index.html', (err, data)=>{ // server e user request pathale fs er maddhome html er data gulo read kore nia asbe.
        res.write(data) // j data ta pelam seta res hisebe pathia dilam write kore. note: ai file er data pathate write korte hoi
        res.end()
    })
})

// port 
server.listen(4142, ()=>{
 console.log("server is Running on PORT 4142")
});




