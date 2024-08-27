const fs = require("fs");

fs.appendFile("my-new-file.txt", "cookies blah blah blah blah cookies", (err) => {
    if (err) {
        throw err;
    }
    
    console.log("Saved!");
});

fs.open("my-new-file2.txt", "w", (err, file) => {
    if (err) {
        throw err;
    }

    console.log("Saved!");
});

fs.writeFile("my-new-file3.txt", "cookies blah blah blah blah", (err) => {
    if (err) {
        throw err;
    }

    console.log("Saved!");
});

fs.writeFile("my-new-file4.txt", "cookies blah blah blah blah cookies", (err) => {
    if (err) {
        throw err;
    }

    console.log("Saved!");
})

fs.appendFile("my-new-file3.txt", " cookies", (err) => {
    if (err) {
        throw err;
    }

    console.log("Updated!");
});

fs.writeFile("my-new-fileblahblahblah.txt", "stuff", (err) => {
    if (err) {
        throw err;
    }
    console.log("Updated!");
});

fs.unlink("my-new-fileblahblahblah.txt", (err) => {
    if (err) {
        throw err;
    }

    console.log("File deleted!");
});

fs.writeFile("rename-me.txt", "stuff", (err) => {
    if (err) {
        throw err;
    }

    console.log("Made file!");
});

fs.rename("rename-me.txt", "cookies.txt", (err) => {
    if (err) {
        throw err;
    }

    console.log("Renamed to cookies!");
});;
