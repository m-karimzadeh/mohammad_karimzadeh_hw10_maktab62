const http = require('http');
const fs = require('fs');

const port = 3000;
let errPage;

try {
    errPage = fs.readFileSync(__dirname + '/pageFile/error.html', 'utf8')
} catch (err) {
    console.log('errPage read err');
}



http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(__dirname + '/pageFile/index.html', 'utf-8', (err, page) => {
            if (err) {
                console.log(err);
                res.end(errPage)

            } else {
                res.end(page)
            }
        });

    }else{
        res.end('Page Not Found :(')
    }

}).listen(port);



console.log(`server is running on port ${port}`);