const { error } = require("console");
const fs = require("fs");

// 파일이름 변경시 3가지 방법
try {
  // 파일이름 변경
  fs.renameSync("./file1.txt", "./file-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./file.txt", "./file-new.txt", (error) => {
  console.log(error);
});

fs.promises
  .rename("./file.txt", "./file-new.txt")
  .then(() => {
    console.log("rename file");
  })
  .catch(console.error(error));
