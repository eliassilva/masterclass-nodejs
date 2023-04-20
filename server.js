import http from 'http';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/extensions
import { send404 } from './send404.js';

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
