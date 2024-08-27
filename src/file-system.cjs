const fs = require('fs');
const fsPromise = require('fs/promises');

fs.rename('before.json', 'after.json', err => {
    if (err) {
        return console.error(err);
    }
});

try {
    fs.renameSync('before.json', 'after.json');
} catch (err) {
    console.error(err);
}

async function promiseBasedFileStuff() {
    const fileName = './after.json';

    try {
        const data = await fsPromise.readFile(fileName, 'utf8');
        console.log(data)
        const content = "Stuff!";
        await fsPromise.writeFile(fileName, content);
        console.log("Wrote some stuff!");
        const newData = await fsPromise.readFile(fileName, "utf8");
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}