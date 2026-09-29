// Create web server
const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello from the Copilot web server!\n");
});

server.listen(3000, () => {
    console.log("Web server listening on port 3000");
});