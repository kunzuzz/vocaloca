/// <reference path="node-vsdoc.js" />

var http = require('http');
var qs = require('querystring');

http.createServer(function (request, response) {
    var body = '';

    request.on('data', function (data) {
        body += data;

        if (body.length > 1e6) {
            request.connection.close();
        }
    });

    request.on('end', function () {
        var POST = qs.parse(body);
        console.log(POST);
        
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hello World\n' +
        'Method: ' + request.method + '\n' +
        'Body: ' + body + '\n'
    );
    }); 

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');