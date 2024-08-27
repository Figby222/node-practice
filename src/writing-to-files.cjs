const fs = require("node:fs");
const fsPromise = require("node:fs/promises");

const content = "Stuff!";

fs.writeFile("./test.txt", content, err => {
    if (err) {
        console.error(err);
    }
});

const content2 = "Stuff again!";;

try {
    fs.writeFileSync("./test.txt", content2);
} catch (err) {
    console.error(err);
}

async function writeToFile() {
    try {
        const content = "Stuff again again!";
        await fsPromise.writeFile("./test.txt", content);
    } catch(err) {
        console.log(err);
    }
}

writeToFile();

const content3 = "Stuff again again again!";

fs.writeFile("./test.txt", content3, { flag: 'a+' }, err => {});

const content3AndAHalf = "Stuff again again again aga";

fs.appendFile("./test.txt", content, err => {
    if (err) {
        return console.error(err);
    }
});

const content4 = "Stuff again again again again!"
async function appendToFile() {
    try {
        await fsPromise.appendFile("./test.txt", content);
    } catch (err) {
        console.log(err);
    }
}

appendToFile();