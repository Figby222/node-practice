const url = require("url");

const address = "http://localhost:8080/default.htm?year=2017&month=february";

const query = url.parse(address, true);

console.log(query.host);
console.log(query.pathname);
console.log(query.search);

const queryData = query.query;

console.log(queryData.month);