function process(request, response) {
    if (request.method.toLowerCase() === 'options') {
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
    }
}

module.exports.process = process;