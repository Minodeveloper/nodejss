let http  = require('http');
let fs = require('fs');




let server = http.createServer(function(request, response){
    console.log('request was made' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});
    let myObj = {
        name: 'NARUTO',
        job: 'NINJA',
        age: 29

    };
    response.end(JSON.stringify( myObj));
    


});

server.listen(3200,'127.0.0.1');
console.log('yo dawgs listening to port 3200');