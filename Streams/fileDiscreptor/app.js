import fs from "fs"

const fd = fs.openSync("text.txt", "r+")
fs.writeSync(fd,"fmemfemfefefe1212")

// const readbuffer = Buffer.alloc(10)

// fs.read(3, {
//     buffer: readbuffer,
//     position: 2,
//     length: 5,
//     offSet:2
// }, (err, bytesRead, buffdata) => {
//     console.log(err)
//     console.log(bytesRead)
//     console.log(buffdata)
// })
