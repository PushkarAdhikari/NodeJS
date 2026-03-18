const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    console.log('Request received');
    const log = `${Date.now()} ${req.url} New Request received \n`;
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end('Hello from Homepage');
                break;
            case '/about':
                res.end('Hello from About Page');
                break;
            case '/contact':
                res.end('Hello from Contact Page');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page Not Found</h1>');
        }
        // res.end('Hello from server');
    });
});
myServer.listen('4000', (req, res) => {
    console.log('Server is listening on port 4000');

});

