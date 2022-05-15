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
    response.writeHead(200, {'Content-Type': 'text/plain'});
    

    let myReadStream = fs.createReadStream(__dirname +'/readMe.txt','utf-8');
    // let mywriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');

    //using pipes

    myReadStream.pipe(response);


});

server.listen(3200,'127.0.0.1');
console.log('yo dawgs listening ro port 3200');