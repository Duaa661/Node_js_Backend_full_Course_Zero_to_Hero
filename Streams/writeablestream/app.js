// import fs from "fs"
// // // create a clean file already data clean
// // const ws = fs.createWriteStream("file.txt")
// // setTimeout(() => {
// //     ws.write("Hello")
// //     ws.write("World")
// //     ws.write("Dushyant chauhan")
// // },500)
// const rs = fs.createWriteStream("newle.txt", {
//     highWaterMark:4
// }
// )
// // after use cork not write any text in file
// rs.cork()
// rs.uncork()
// rs.write("djjwjd")
// rs.write("djjwjd")
// rs.write("djjwjd")
// rs.writableEnded()

// // console.log(rs.writableCork)

// // rs.on("open", (fd) => {
// //     console.log("fd",fd)
// // })


// // rs.end()
// // rs.on("finish", (fd) => {
// //     console.log("fisihed")
// // })
// // rs.on("data", (cb) => {
// //     fs.appendFile("strams.txt",cb)
// // })

// // rs.on("end", () => {
// //     console.timeEnd()
// // })

