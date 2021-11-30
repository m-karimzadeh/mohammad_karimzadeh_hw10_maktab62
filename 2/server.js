const http = require('http');
const port = 3000;

let personInfoObj = {
    1: { name: "mohammad", family: "karimzadeh", age: 30, city: "tehran" },
    2: { name: "davood", family: "rabushe", age: 29, city: "zahedan" },
    3: { name: "ramin", family: "mansoori", age: 30, city: "khoramAbad" },
    4: { name: "sinohe", family: "bahreman", age: 29, city: "astane" },
    5: { name: "behzad", family: "karimi", age: 30, city: "arak" },
    6: { name: "majid", family: "bigdeli", age: 30, city: "zanjan" },
}



http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.end('Hello World')

    } else if (req.url === '/getPersonInfo' && req.method === 'GET') {
        res.end(JSON.stringify(personInfoObj))

    } else {
        res.end('not found')
    }
}).listen(port);



console.log(`server is running on port ${port}`);