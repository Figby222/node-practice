const http = require("http");
const upperCase = require("upper-case");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(upperCase.upperCase("cookies blah blah blah blah cookies"));
    res.end();
}).listen(8080);