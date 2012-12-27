function writeHtml(response, html) {
    response.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
    response.end(html);
}

module.exports.writeHtml = writeHtml;