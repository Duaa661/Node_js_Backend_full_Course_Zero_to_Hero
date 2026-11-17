import fs from "fs"
import { pipeline } from "stream";
const {Readable,writeable,Duplex,Transform,Passthrough} from "stream
const readstream = fs.createReadStream("C:\\Users\\Admin\\Desktop\\Node.js_Backend\\s.png");

const ws=fs.createWriteStream("dd.png")
readstream.pipe(ws)

// setTimeout(() => {
//     readstream.destroy("Dagerous")
// }, 1000)

// setInterval(() => {
//     console.log("jiii")
// },200)

pipeline(readstream, ws, (err) => {
    console.log(err)
})