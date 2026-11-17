import { Buffer } from "buffer"

// const buffer1 = Buffer.alloc(10000);
// const buffer2 = Buffer.allocUnsafe(13000)
// buffer2.fill(6)
// console.log(buffer1)
// console.log(buffer2)

console.time("Buffer.alloc")
for (let i = 0; i < 100000; i++){
    const buffer = Buffer.alloc(1024);
}
console.timeEnd("Buffer.alloc")

// buffer allocUnsafe is faster rather than alloc 
// we are use it we need to fill value. So we use allocUnsafe
console.time("Buffer.allocUnsafe")
for (let i = 0; i < 100000; i++){
    const buffer = Buffer.alloc(1024);
}
console.timeEnd("Buffer.allocUnsafe")

