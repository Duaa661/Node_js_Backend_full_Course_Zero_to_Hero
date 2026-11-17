import fs from "fs"


const rd = fs.createReadStream("C:\\Users\\Admin\\Desktop\\myphoto.jpg");

const wt = fs.createWriteStream("m.jpg");
// // not handle backpressure consuming high memory
// rd.on("data", (chunk) => {
//     const isempty = wt.write(chunk)
//     if (!isempty) {
//         rd.pause();
//     }
// })
// wt.on("drain", () => {
//     rd.resume()
// })
rd.pipe(wt)
rd.unpipe(wt)
rd.on("end", () => {
    console.timeEnd();
})