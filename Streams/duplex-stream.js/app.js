// import fs from "fs"
// import {spawn} from "child_process"
// // process.stdout.write("hii")
// // process.stdin.write("hii")
// const writestram = fs.createWriteStream("otuput.txt")

// process.stdin.pipe(writestram)

// const childprocess = spawn("cat", ["otuput.txt"])

// childprocess.stdout.on("data", (chunk) => {
//     console.log(chunk.toString())
// })
// // process.stderr.write("Error")

import fs from "fs"

// console.time()
// for (let i = 0; i < 500; i++){
//     fs.writeFile('num.txt', `${i}`, (err) => {
//         if(err)console.log(err)
//         if(i===500){
//             console.timeEnd()
//         }
//     })
// }