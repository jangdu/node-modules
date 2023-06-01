const os = require("os");

// 줄바꿈 문자열
console.log(os.EOL === "\n");

// 최종 메모리
console.log(os.totalmem());
// 사용가능 메모리
console.log(os.freemem());
// 운영체제 타입
console.log(os.type());
// 사용자 정보
console.log(os.userInfo());
// cpu정보
console.log(os.cpus());

console.log(os.homedir());
// 사용자 이름
console.log(os.hostname());
