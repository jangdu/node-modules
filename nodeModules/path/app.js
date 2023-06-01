const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));
// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute   절대경로인지 불리언
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("../"));

// nomalize
console.log(path.normalize("./a////aaa"));

// join 파일구조에 파일 추가한 path
// /Users/jangduhyeog/Desktop/node_js/dream-coding/nodeModules/path/image
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
