let http = require('http');
let fs   = require('fs');



let server = http.createServer(function(request, response)
{
    console.log('request was made' + request.url);
    if(request.url === '/' || request.url === '/home')
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname +'/index.html').pipe(response);
    }else if(request.url === '/contact')
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname +'/contact.html').pipe(response);
    }else if(request.url === '/api')
    {
        let myapi = [{name:'ryu', age:'29'}, {name:'naruto', age:16}];
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(myapi));
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/404.html').pipe(response);
    }


    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.end('feed me popcorn');
});

server.listen(3200, '127.0.0.1');
console.log('Yo dawg server is serving! at port 3200');