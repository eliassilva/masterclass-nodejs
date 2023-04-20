const http = require('http');
const fs = require('fs');
const path = require('path');

const { send404 } = require('./send404');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let fileurl;
    if (req.url === '/') {
      fileurl = 'log.txt';
    } else {
      fileurl = req.url;
    }

    const filepath = path.resolve(`./${fileurl}`);

    fs.exists(filepath, (exists) => {
      if (!exists) {
        send404(res);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      fs.createReadStream(filepath).pipe(res);
    });
  }
});

server.listen(8080, () => {
  console.log('server is running...');
});
