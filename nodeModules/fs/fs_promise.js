// 프로미스 형태로 가져오기
const fs = require("fs").promises;

// 파일 읽기
fs.readFile("./test.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);

// 파일쓰기
fs.writeFile("./file.txt", "Hello, ddd") //
  .catch(console.error);

// 파일내에 추가
fs.appendFile("./file.txt", "Hello, ddd") //
  .catch(console.error);

// 복사도 가능
fs.copyFile("./file.txt", "./file2.txt").catch(console.error);

// mkdir
fs.mkdir("folder").catch(console.error);

// 파일 전부 읽기
fs.readdir("./").then(console.log).catch(console.error);
