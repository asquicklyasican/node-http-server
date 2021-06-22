"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
// create constants for port and host name
var port = 8080;
var hostName = "localhost";
// create a listener to react to requests, and return responses
var requestListener = function (request, response) {
    response.writeHead(200, { "content-type": "text/html" });
    // create a read stream from our html file
    // and pipe it to our server response
    var stream = fs_1.createReadStream("index.html");
    stream.pipe(response);
};
// create our server, with a request listener
var server = http_1.createServer(requestListener);
// configure the server to listen at hostname:port
server.listen(port, hostName, function () {
    console.log("Server is running on http://" + hostName + ":" + port);
});
