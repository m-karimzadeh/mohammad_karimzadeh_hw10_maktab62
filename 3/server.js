const http = require('http');
const port = 3000;



http.createServer((req, res) => {

    if (req.url !== '/' && req.method === 'GET') {
        console.log(req.url);

        res.end(`you'r URL ===> ${req.url}`)

    } else {
        res.end('Hello World')
    }
}).listen(port);



console.log(`server is running on port ${port}`);