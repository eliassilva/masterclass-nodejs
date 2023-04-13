const http = require("http");

const server = http.createServer((req, res) => {
  res.end("masterclass nodejs");
});

server.listen(8080, () => {
  console.log("server is running...");
});
