// const buffer = new ArrayBuffer(4);
// const view = new DataView(buffer)
// // // littleInt
// // view.setInt16(0, 260, true)
// // // bigInt
// // view.setInt16(2, 260)

// // console.log(view);
// // console.log(view.getInt16(0, true));
// // console.log(view.getInt16(2))
// // big int
// // view.setInt32(0, 0x7823e324);
// // littleInt
// view.setInt32(0, 0x7823e324,true);
// // console.log(view)
// // console.log(view.getInt32(0))
// console.log(view.getInt32(0))
// console.log(view)


// const buffer = new ArrayBuffer(4);

// const arr = new Uint8Array(buffer);

// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

// console.log(arr);


// const buffer = new ArrayBuffer(4);

// const arr = new Uint16Array(buffer);

// arr[0] = 1000;
// arr[1] = 2000;

// console.log(arr);


// const buffer = new ArrayBuffer(8);

// const arr = new Uint32Array(buffer);

// arr[0] = 100000;
// arr[1] = 200000;

// console.log(arr);



const buffer = new ArrayBuffer(48);

const arr = new BigUint64Array(buffer);

arr[0] = 1000000000000n;
arr[1] = 2000000000000n;
arr[3] = 3000000000000n;
arr[4] = 4000000000000n;


console.log(arr);