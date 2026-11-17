// import fs from "fs/promises"
// const uint8array = new Uint8Array(8);

// uint8array[0] = '0x50'
// uint8array[1] = '0x72'
// uint8array[2] = '0x6f'
// uint8array[3] = '0x43'
// uint8array[4] = '0x6f'
// uint8array[5] = '0x64'
// uint8array[6] = '0x72'
// uint8array[7] = '0x72'

// console.log(uint8array)

// const decoder = new TextDecoder("utf-16");
// const reault = decoder.decode(uint8array);

// fs.writeFile("new.text",reault)

import http from "http";
import fs from "fs"
const a = new ArrayBuffer(4);
// const packet = new Uint8Array([
//   0x01, // version
//   0x02, // message type
//   0x03, // data length
//   0x41, // A
//   0x42, // B
//   0x43  // C
// ]);

const buffer = fs.readFileSync("../s.png");
console.log(buffer)
startServer(buffer);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
   res.end(responseData);
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
}