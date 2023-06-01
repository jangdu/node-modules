const buf = Buffer.from("hi");

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
// 초기화 후 할당
const buf2 = Buffer.alloc(2);
// 초기화 안하고 할당
const buf3 = Buffer.allocUnsafe(2);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3);

// 합치기
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
