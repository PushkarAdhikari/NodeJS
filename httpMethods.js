const http = require('http');
const fs = require('fs');
const url = require('url');


const myHandler = (req, res) => {
    if (req.url === '/favicon.ico') return null;
    console.log('Request received');
    const log = `${Date.now()} ${req.method} ${req.url} New Request received \n`;
    const myUrl = url.parse(req.url, true);
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            // Every case will have create all the methods (GET, POST, PUT, DELETE) and handle them accordingly
            // Here come the ExpressJS and other frameworks which will make our life easier by handling all the methods and routes for us
            case '/':
                if (req.method === 'GET') res.end('Hello from Homepage');
                break;
            case '/about':
                const username = myUrl.query.username;
                res.end(`Hello ${username} Welcome to the About Page`);
                break;
            case '/contact':
                res.end('Hello from Contact Page');
                break;
            case '/signup':
                if (req.method === 'GET') {
                    res.end('This is the signup form')
                } else if (req.method === 'POST') {
                    //DB logic to save the form data
                    res.end('Form submitted successfully')
                };
                break;
            default:
                res.end('<h1>404 - Page Not Found</h1>');
        }

    });
}

const myServer = http.createServer(myHandler);
const PORT = 4001;
myServer.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}`);
});

