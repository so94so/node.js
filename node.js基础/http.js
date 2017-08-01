
const  http = require('http');

http.createServer(function (req,res) {
    console.log(req.url);

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Hello Node.js !!!</h1>');
    res.end();
}).listen(3000);

console.log('server is running at port 3000 ...');
