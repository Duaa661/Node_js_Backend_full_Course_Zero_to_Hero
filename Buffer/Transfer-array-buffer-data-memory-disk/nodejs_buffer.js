const a=new ArrayBuffer(4)
const uint8array = new Uint8Array(a)
const nodeBuffer = new Buffer.from(a)
// console.log(nodeBuffer)

uint8array[0]="0xe5"
uint8array[1] = "0xe6"

console.log(nodeBuffer.toString())