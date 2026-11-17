const buffer = new ArrayBuffer(8);

const view=new Uint8Array(buffer)
view[0] = 100;
view[1] = 200;
view[2] = 300;
view[3] = 400;
view[4] = 500;
view[5] = 600;
view[6] = 700;
view[7] = 800;


console.log(view)