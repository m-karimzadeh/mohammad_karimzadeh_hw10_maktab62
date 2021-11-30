const http = require('http');
const port = 3000;



http.createServer((req, res) => {

    if (req.url !== '/' && req.method === 'GET') {
        console.log(req.url);

        if (req.url === '/about') {
            res.end('About Me')

        }else if (req.url === '/contact') {
            res.end('Contact Me')
            
        }else if (req.url === '/productlist') {
            res.end('Products List')
            
        }else if (req.url === '/product') {
            res.end('Product Info')
            
        }

    } else if (req.url === '/' && req.method === 'GET'){
        res.end('Hello Web Application');

    }else{
        res.end('Page Not Found :(')
    }

}).listen(port);



console.log(`server is running on port ${port}`);