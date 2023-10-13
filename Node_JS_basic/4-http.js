const http = require('http');
const appPort = 1245;

// Create a local app to receive data from
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

console.log(`app listening on localhost:${appPort}`);
app.listen(appPort);
module.exports = app;
