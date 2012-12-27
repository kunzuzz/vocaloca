function process(request, response, callback) {
    if (request.method.toLowerCase() === 'post') {
        var body = '';

        request.on('data', function(data) {
            body += data;

            if (body.length > 1e6) {
                request.connection.close();
            }
        });

        request.on('end', function() {
            var post = JSON.parse(body);
            callback(request, response, post);
        });
    }
}

module.exports.process = process;