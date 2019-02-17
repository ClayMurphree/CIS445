const http = require('http');

let options = {
    host: 'www.una.edu', port: 80, path: '/', method: 'GET'
}

const request = http.request(options, function(response){
    response.on('data', function(data){
        console.log(data.toString('utf8'));
    });
});

request.end();