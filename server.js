/// <reference path="node-vsdoc.js" />

var http = require('http');
var db = require('./mongodb');
var cors = require('./cors');
var post = require('./post');
var out = require('./out');

http.createServer(function (request, response) {
    cors.process(request, response);
    post.process(request, response, onPost);
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

function onPost(request, response, post) {
    console.log(post);
    db.saveWords(post); //expected: {"word1": {"word1" : "trans1"}, "word2": {"word2" : "trans2"}} 
    var html = 'Hello World\n' + 'Method: ' + request.method + '\n' + 'Body: ' + post + '\n';
    out.writeHtml(response, html);
}