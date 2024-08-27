const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

fs.readFile("./test.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    console.log(data);
});

try {
    const data = fs.readFileSync("./test.txt", "utf8");
    console.log(data);
} catch (err) {
    console.error(err);
}

async function readFromFile() {
    try {
        const data = await fsPromises.readFile("./test.txt", { encoding: "utf8" });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFromFile();