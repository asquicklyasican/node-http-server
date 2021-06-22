import { createServer, RequestListener } from "http";
import { createReadStream } from "fs";

// create constants for port and host name
const port = 8080;
const hostName = "localhost";

// create a listener to react to requests, and return responses
const requestListener: RequestListener = (request, response) => {
    response.writeHead(200, { "content-type": "text/html" });
  // create a read stream from our html file
  // and pipe it to our server response
  const stream = createReadStream("index.html");

  stream.pipe(response);
};

// create our server, with a request listener
const server = createServer(requestListener);

// configure the server to listen at hostname:port
server.listen(port, hostName, () => {
    console.log(`Server is running on http://${hostName}:${port}`);
  });
  