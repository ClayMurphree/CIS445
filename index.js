const express = require('express');
const app = express();


app.get('/', function(request, response){
    response.writeHead(200);
    response.write('<html><body><p><h1>Please choose your path adventurer</h1><br>');
    response.write('for all players: /player<br>');
    response.write('to interact with a specific player: /player/playername<br>');
    response.write('for an list of items: /item<br>')
    response.write('to interact with a specific item: /item/itemname</p></body></html>')
    response.end();
});

app.get('/player', function(request, response){
       response.writeHead(200);
       response.write("<html><body><h1>Displays all players </h1></body></html>");
       response.end();
});

app.get('player/:playername', function(request, response){
    const player = request.params.playerName;
       response.writeHead(200);
       response.write("<html><body><h1>Displays a player</h1></body></html>");
        response.end();
});

app.post('player', function(request, response){
    response.writeHead(200);
    response.write("<html><body><h1>User should post a new player here</h1></body></html>")
});

app.delete('player/:playername', function(request, response) {
   const player = request.params.playername;
      response.writeHead(200);
       response.write("<html><body><h1>Hello, you have terminated " + player + "</h1></body></html>");
        response.end();
    
});

app.put('player/:playername', function(request, response) {
    const player = request.params.playername;
     response.writeHead(200);
     response.write("<html><body><h1>Hello, you have updated" + player + "</h1></body></html>");
     response.end();
     
})

app.get('/item', function(request, response){
       response.writeHead(200);
       response.write("<html><body><h1>Displays all players </h1></body></html>");
       response.end();
});

app.get('/item/:itemname', function(request, response){
    const item = request.params.playerName;
       response.writeHead(200);
       response.write("<html><body><h1>Displays a player</h1></body></html>");
        response.end();
});

app.post('/item', function(request, response){
    response.writeHead(200);
    response.write("<html><body><h1>User should post a new item here</h1></body></html>")
});

app.delete('/item/:itemname', function(request, response) {
   const item = request.params.itemname;
      response.writeHead(200);
       response.write("<html><body><h1>Hello, you have terminated " + item + "</h1></body></html>");
        response.end();
    
});

app.put('item/:itemname', function(request, response) {
    const item = request.params.itemname;
     response.writeHead(200);
     response.write("<html><body><h1>Hello, you have updated" + item + "</h1></body></html>");
     response.end();
     
})

app.get('/location', function(request, response){
       response.writeHead(200);
       response.write("<html><body><h1>Displays all locations </h1></body></html>");
       response.end();
});

app.get('/location/:locationname', function(request, response){
    const location = request.params.locationname;
       response.writeHead(200);
       response.write("<html><body><h1>Displays a location</h1></body></html>");
        response.end();
});

app.post('/location', function(request, response){
    response.writeHead(200);
    response.write("<html><body><h1>User should post a new location here</h1></body></html>")
});

app.delete('/location/:locationname', function(request, response) {
   const location = request.params.locationname;
      response.writeHead(200);
       response.write("<html><body><h1>Hello, you have terminated " + location + "</h1></body></html>");
        response.end();
    
});

app.put('location/:locationname', function(request, response) {
    const location = request.params.locationname;
     response.writeHead(200);
     response.write("<html><body><h1>Hello, you have updated" + location + "</h1></body></html>");
     response.end();
     
})




app.listen(8080, function() {
    console.log('express is now up and running on port 8080...');
});