import fs from "fs"




console.time()

const ws = fs.createWriteStream("stram.txt");

for (let i = 1; i <= 1000000; i++){
    ws.write(`${i},`)
}
ws.end()
ws.on("finish", () => {
    console.timeEnd()
})