import fs from "fs"

const rs = fs.readFile("C:\\Users\\Admin\\Desktop\\Node.js_Backend\\Streams\\writeablestream\\file.txt",{highWaterMark:4})

// let i=0;
// setTimeout(() => {
//     console.log(ws.writableLength)
// }, 10)
// ws.on("drain", () => {
//     console.log(ws.writableLength)
//     write100A();
// })

// function write100A() {
    
// while ( i <= 1000){
//     console.log(ws.writableLength)
//     let isempty = ws.write('a')
//     if (!isempty) {
//         break;
//     }
//     console.log(isempty)
//     i++;
// }
// }

ws.on("data", (chunk) => {
    const isempty = ws.write(chunk)
    if (!isempty) {
        rs.pause();
    }
})
ws.on("drain", () => {
    rs.pause()
})