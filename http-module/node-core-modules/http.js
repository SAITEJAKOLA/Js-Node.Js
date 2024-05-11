const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(req.url);
  const posts = [
    {
      id: 1,
      versionid: "12345678",
      title: "Post 1",
    },
    {
      id: 2,
      versionid: "12345678",
      title: "Post 2",
    },
  ];
  if (url === "/home") {
    const filePath = path.join(
      "C:\\Users\\saite\\source\\javascript-sandbox-final\\javascript-sandbox-final\\19-nodejs-modules\\05-http-module\\node-core-modules",
      "index.html"
    );
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { contentType: "text/html" });
        res.end("<h1>Opps we have a problem  Error</h1>");
      }
      res.writeHead(200, { contentType: "text/html" });
      res.end(data);
    });
  } else if (url === "/about") {
    res.writeHead(200, { contentType: "text/html" });
    res.end("<h1>About Page, Welcomes you</h1>");
    console.log("We are in the about page");
  } else if (url === "/posts") {
    res.writeHead(200, { contentType: "application/json" });
    res.end(JSON.stringify({ status: 200, sucess: true, data: posts }));
    console.log("We are in the about page");
  } else {
    res.writeHead(404, { contentType: "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(5000, () => {
  console.log(`server is listeing on port 5000...`);
});
