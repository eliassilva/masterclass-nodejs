const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('masterclass nodejs');
});

server.listen(8080, () => {
  console.log('server is running...');
});
