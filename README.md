##　压缩格式

zip 和 gzip 是两种我们最常见到的压缩格式，当然，gzip 在 Windows 下很少有人接触。
tar 是一种归档格式，它默认不会压缩，需要结合 gzip 来将最终的 tar 文件以 gzip 格式压缩成为一个 tar.gz 文件，通常我们会缩写为 tgz。
为什么没有提到 rar？因为它是专利保护的算法，你可以免费获得解压工具，而压缩工具是需要付费的。所以我们一般应用场景下，很少会提供 rar 压缩文件。
本文将分别介绍 gzip，tar，tgz 和 zip 的压缩和解压缩在 Node.js 下如何实现。
