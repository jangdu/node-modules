import fs from "fs";
// console.log(global);

global.hello = () => {
  console.log("hello");
};

global.hello();
hello();
