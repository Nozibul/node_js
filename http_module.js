const http = require('http');


// call back func er parameter hisebe req , res ta nibo 
const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.end('<h1>Hello Node JS</h1>')

});

// akhane port ta dibo and chaile callback func dibo
server.listen(4141, ()=>{
    console.log('Server is Running PORT 4141');
});


