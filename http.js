const fs = require('fs');
const http = require('http');

//another process
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('This is Home Page, ')
        res.write(' Node JS');
        res.end();
    } else if(req.url === '/about'){
        res.write('This About page');
        res.end();
    }else{
        res.write('Page not Found');
        res.end();
    }
});

// port lesten korbo 
server.listen(3030, ()=>{
    console.log('Listening on port 3030')
});