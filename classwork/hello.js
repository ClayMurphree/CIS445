const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.writeHead(200);
    response.write('<html><body><p>Please specify an animal in the path </p></body></html>');
    response.end();
});

app.get('/cat', function(request, response){
       response.writeHead(200);
       response.write("<html><body><h1>Hello, cat is running </h1></body></html>");
    setTimeout(function(){
        response.write("<html><body><h2>Cat is done</h2></body></html>");
        response.end();
    });
});

app.get('/dog', function(request, response){
       response.writeHead(200);
       response.write("<html><body><h1>Hello, dog is running </h1></body></html>");
    setTimeout(function(){
        response.write("<html><body><h2>dog is done</h2></body></html>");
        response.end();
    });
});

app.get('/:animal', function(request, response){
    const animal = request.params.animal;
       response.writeHead(200);
       response.write("<html><body><h1>Hello,you have terminated the  " + animal + "</h1></body></html>");
        response.end();
});


app.delete('/:animal', function(request, response)) {
    const animal = request.params.animal;
       response.writeHead(200);
       response.write("<html><body><h1>Hello,you have terminated the  " + animal + "</h1></body></html>");
        response.end();
    
});

app.listen(8080, function() {
    console.log('express is now up and running on port 8080...');
});
/*
http.createServer(function(request, response){
    response.writeHead(200);
    response.write("<html><body><h1>Dog is running </h1></body></html>");
    setTimeout(function(){
        response.write("<html><body><h2>Dog is done</h2></body></html>");
        response.end();
    }, 5000);
}).listen(8080);

console.log('listening on port 8080...');
*/
