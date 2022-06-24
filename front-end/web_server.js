
const http = require("http");
const fs = require("fs").promises;
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    fs.readFile(__dirname + '/basic.html')
        .then(data => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(data);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err.message);
        return;
    })};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
