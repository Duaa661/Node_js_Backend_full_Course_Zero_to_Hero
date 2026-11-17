// const buffer = new ArrayBuffer(8);


// buffer[0] = 100;
// console.log(buffer)
// const arrayBuffer = new ArrayBuffer(5);

// const buffer = Buffer.from("Hello");

// console.log(buffer);

const buffer = Buffer.from("Hello");

const arrayBuffer = buffer.buffer.slice(
  buffer.byteOffset,
  buffer.byteOffset + buffer.byteLength
);
// buffer[0] = 100
// buffer[1]=10
// buffer[2]=20
// buffer[3]=30
// buffer[4]=400
// buffer[5]=500
// buffer[6]=600
// buffer[7] = 700
// for (let i = 0; i < buffer.byteLength; i++){

// console.log("Buffer length ->",buffer)    
// }
