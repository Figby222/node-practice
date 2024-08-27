const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.write(req.url);
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    res.write(text);
    res.end();
}).listen(8080);