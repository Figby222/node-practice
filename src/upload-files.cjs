const http = require("http");
const formidable = require("formidable");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.url == "/fileupload") {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            const oldpath = files.filetoupload.filepath;
            const newpath = "./" + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, (err) => {
                if (err) {
                    throw err;
                }

                res.write("File uploaded and moved");
                res.end();
            })
        })
        return;
    }

    res.writeHead(200, {"Content-Type": "text/html" });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);