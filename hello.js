const http = require("http")//how we require modules

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("<html><body><h1>Dog is running </h1></body></html>");
    setTimeout(function(){
        response.write("<html><body><h2>Dog is done</h2></body></html>");
        response.end();
    }, 5000);
}).listen(8080);

console.log('listening on port 8080...');