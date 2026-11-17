// first trick
// const buffer = new ArrayBuffer(4)


// const uint8Array = new Uint8Array(buffer)
// const uint16Array = new Uint16Array(buffer)
// const uint32Array = new Uint32Array(buffer)


// console.log(uint8Array)
// console.log(uint16Array)
// console.log(uint32Array)

// Second Trick

// const uint8Array = new Uint8Array(4)
// const uint16Array = new Uint16Array(8)
// const uint32Array = new Uint32Array(12)


// console.log(uint8Array)
// console.log(uint16Array)
// console.log(uint32Array)


// Short Trick

// const uint8Array = new Uint8Array([0xfe,0xee,0,0x8a])

// console.log(uint8Array.buffer)


// const uint8Array = new Uint8Array(1.99 * 1024 * 1024 * 1024).fill("0xff")

// // for (let i = 0; i < uint8Array.byteLength; i++) {
// //     console.log(uint8Array.fill(i));
// // }

// console.log(uint8Array.buffer)



// const a = new ArrayBuffer(4, { maxByteLength:16 })
// a.resize(8)
// console.log(a)



// const a = new ArrayBuffer(4, { maxByteLength:16 })
// const b=a.transfer()
// console.log(b)
// console.log(a)