let http  = require('http');
let fs = require('fs');




//using streams
// myReadStream.on('data', function(chunk){
//     mywriteStream.write(chunk);
//     console.log('new chunk received:');
//     // console.log(chunk);
// });






let server = http.createServer(function(request, response){
    console.log('request was made' + request.url);
    // response.writeHead(200, {'Content-Type': 'text/plain'});// for text files to be sent brwser interpret
    response.writeHead(200, {'Content-Type': 'text/html'});
    let myReadStream = fs.createReadStream(__dirname +'/index.html','utf-8');
    myReadStream.pipe(response);


});

server.listen(3200,'127.0.0.1');
console.log('yo dawgs listening ro port 3200');