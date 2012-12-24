/// <reference path="node-vsdoc.js" />

var http = require('http');
var db = require('./mongodb');

http.createServer(function (request, response) {
    if (request.method === 'OPTIONS') {
        // add needed headers
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = true;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
        // respond to the request
        response.writeHead(200, headers);
        response.end();
    } else if (request.method === 'POST') {

        var body = '';

        request.on('data', function(data) {
            body += data;

            if (body.length > 1e6) {
                request.connection.close();
            }
        });

        request.on('end', function() {
            var post = JSON.parse(body); //{"word1": {"word1" : "trans1"}, "word2": {"word2" : "trans2"}}
            console.log(post);

            db.saveWords(post);

            response.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
            response.end('Hello World\n' +
                'Method: ' + request.method + '\n' +
                'Body: ' + body + '\n'
            );
        });
    }
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');