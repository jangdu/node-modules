const process = require("process");

//
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
// 환경변수
console.log(process.env);
// 얼마나 실행했는지
console.log(process.uptime());
// 디렉토리 경로
console.log(process.cwd());
// cpu사용량
console.log(process.cpuUsage());

process.nextTick(() => {
  console.log("nexttick");
});
