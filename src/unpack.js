var fs = require("fs");
var zlib = require("zlib");

/* fs.createReadStream("1.txt.zip")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(`2.txt`));
// .pipe(fs.createWriteStream(`${new Date() - 0}.txt`)); */
fs.createReadStream("./test.zip")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(`dir`));
// .pipe(fs.createWriteStream(`${new Date() - 0}.txt`));
