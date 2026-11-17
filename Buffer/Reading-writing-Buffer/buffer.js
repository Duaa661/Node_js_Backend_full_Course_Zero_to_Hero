// const buffer = new ArrayBuffer(6)

// const view = new DataView(buffer)

// view.setInt8(0, 130)
// // view.setInt8(1,90)
// // view.setInt8(2,60)
// // view.setInt8(3, 0o120)
// // Read value is signed
// const get = view.getInt8(0)
// console.log(get)
// // getUInt read value is unsigned
// const get1 = view.getUint8(0)
// console.log(get1)


const buffer = new ArrayBuffer(1.99 * 1024 * 1024 * 1024)
const view = new DataView(buffer)

for (let i = 0; i < view.byteLength; i++){
    view.setInt8(i, i + 1);
}
for (let i = 0; i < view.byteLength; i++){
   console.log(view.getInt8(i));
}
