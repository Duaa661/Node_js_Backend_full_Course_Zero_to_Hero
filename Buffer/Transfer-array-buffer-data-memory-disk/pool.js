import { Buffer } from "buffer";

const a = Buffer.alloc(4);
const b = Buffer.allocUnsafe(9000);
// Condtion for allocUnsafe to use Buffer pool
// bufferSize<Buffer.poolSize
b[0]=97
console.log(a.byteLength)
console.log(b.byteLength)
console.log(a.buffer.byteLength)
console.log(b.buffer.byteLength)
