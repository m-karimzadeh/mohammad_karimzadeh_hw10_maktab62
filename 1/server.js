const http = require('http');
const port = 3000;




http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.end('Hello World')

    } else {
        res.end('not found')
    }
}).listen(port);



console.log(`server is running on port ${port}`);