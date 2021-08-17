// const fstream = require("fstream");
// const tar = require("tar");
// const zlib = require("zlib");
// const fs = require("fs");

// const inp = fs.createReadStream("./1.txt"); // 创建可读的流

// const out = fs.createWriteStream("1.txt.gz"); //创建可写的流
// // 通过fs文件系统将 data 中的内容写进去
// const gzlib = zlib.createGzlip(); // 创建一个空的压缩包
// inp.pipe(gzlib).pipe(out);
// /* fstream
//     .Reader({ path: "../fedtop", type: "Directory" })
//     .pipe(tar.Pack())
//     .pipe(zlib.Gzip())
//     .pipe(fstream.Writer({ path: "./test.tar.gz" })); */

var fs = require("fs");
var zlib = require("zlib");

/* fs.createReadStream("./1.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./1.txt.zip")); */
fs.createReadStream("../fedtop")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./test.zip"));
