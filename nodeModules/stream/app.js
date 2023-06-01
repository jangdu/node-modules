const fs = require("fs");

// stream을 사용하지 않고
// const beforMem = process.memoryUsage().rss;
// fs.readFile("./test.txt", (_, data) => {
//   fs.writeFile("./file2.txt", data, () => {});
//   // calculate
//   const afterMem = process.memoryUsage().rss;
//   // 해당 파일 사용할때 메모리
//   const diff = afterMem - beforMem;
//   // 실행시 메모리
//   const consumed = diff / 1024 / 1024;
//   console.log(diff);
//   console.log("consumed Memory: " + consumed + "MB");
// });
const data = [];

fs.createReadStream("./file2.txt", {
  highWaterMark: 8, // 기본은 64
  encoding: "utf-8",
})
  .on("data", (chunk) => {
    data.push(chunk);
    console.log(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (err) => {
    console.log(err);
  });
