const fs = require("fs");

const data = fs.readFileSync("./Buffer/s.png");

const arrayBuffer = data.buffer.slice(
  data.byteOffset,
  data.byteOffset + data.byteLength
);

console.log(arrayBuffer.byteLength);