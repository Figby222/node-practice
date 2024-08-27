const url = require("node:url");

const myURL = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash")
const parsedURL = url.parse("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
console.log(parsedURL);

const myURL2 = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
myURL.pathname = "/a/b/c";
myURL.search = "?cookies=true";
myURL.hash = "#figby";

console.log(myURL2);
console.log(myURL2.href);

const myURL3 = new URL(myURL2.href);

console.log(myURL3.port);

myURL3.port = "2312dofaiiadgsugalikuh";

console.log(myURL3.port);