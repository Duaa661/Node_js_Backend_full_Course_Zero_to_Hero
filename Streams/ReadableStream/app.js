import fs from "fs"


// const fileBuff = await fs.readFile("C:\\Users\\Admin\\Videos\\Captures\\c.mp4")
// fs.writeFile("temp.mp4",fileBuff)

// Buffer Disadvantage
// Time 2.5s
// Memory: 1888 MB
// CPU 4%

console.time();

// const readstream = fs.createReadStream("C:\\Users\\Admin\\Videos\\Captures\\c.mp4", {
//     highWaterMark:100*1024
// })

// readstream.on('data', (chunkbuffer) => {
//     fs.appendFileSync('base.mp4', chunkbuffer)
//     if (chunkbuffer.byteLength < 100 * 1024) {
//         console.timeEnd()
//     }
// })

const readstream = fs.createReadStream("C:\\Users\\Admin\\Desktop\\Node.js_Backend\\Streams\\ReadableStream\\newfile.txt", {
    highWaterMark:4
})
readstream.on('readable', () => {
    console.log(readstream.readableLength)
    console.log(readstream.read())
    console.log(readstream.readableLength)
})
// readstream.on('data', (chunk) => {
//     console.log(chunk)
//     // fs.appendFileSync('abc.txt', chunk)
//     // readstream.pause()
//     // setTimeout(() => {
//     //     readstream.resume()
//     // },500)
// })
// let count = 0;
// readstream.on('data', (chunkbuffer) => {
//     count++;
//     fs.appendFileSync('new.txt', chunkbuffer)
//     if (chunkbuffer.byteLength < 200) {
//         console.timeEnd()
//     }
// })
// readstream.on('end', () => {
//     console.log({count})
// })

// console.log(readstream.readableFlowing)
// console.log(readstream.readableEnded)
// console.log(readstream.isPaused())

// // Stream
// Time: 6s
// Memory :50mb
// cpu :10%


// other event
// pause , Resume