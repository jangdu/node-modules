// nodejs로 서버

const http = require("http");
// const http2 = require('http2')  // https
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    console.log(fs.createReadStream("./html/index.html").pipe(res));
  } else if (url === "/course") {
    res.write("course");
  } else {
    res.write("not");
  }
  res.end();
});

server.listen(8080);
