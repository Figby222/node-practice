const fs = require("fs");
const rs = fs.createReadStream("./cookies.txt");

rs.on("open", () => {
    console.log("The file is open");
});