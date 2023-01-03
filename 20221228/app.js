const http = require('node:http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end();

});

server.listen(80);