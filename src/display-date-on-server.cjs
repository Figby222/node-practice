const http = require("http");
const myDateTime = require("./myModule.cjs");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + myDateTime.myDateTime());
    res.end();
}).listen(8080);