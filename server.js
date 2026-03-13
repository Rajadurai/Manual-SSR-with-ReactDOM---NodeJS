const { createServer } = require("http");
const { url } = require("inspector");
const { parse } = require("url");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;
  if (pathName === "/") {
    res.end("Hello Durai !");
  } else if (pathName === "/test") {
    res.end("Testing!!!");
  } else {
    res.end("This page not found");
  }
});
server.listen(8000, () => console.log("Listening for request on port 8000"));
