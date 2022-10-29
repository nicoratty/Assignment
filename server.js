const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let filepath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
    let contentType = getContentType(filepath) || 'text/html'
    let emptyPage = path.join(__dirname, '404.html')
    fs.readFile(filepath, 'utf8', (err, content) => {
        if (err) {
            if (err.code == 'ENDENT') {
                fs.readFile(emptyPage, 'utf8', (err, content) => {
                    res.writeHead(200, { 'Content-Type': contentType })
                    res.end(content)
                })
            } else {
                res.writeHead(500)
                res.end('A server error has occured')
            }
        
        }
        if (!err) {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content)
        }
    })
  
})
    const getContentType = (filepath) => {
        let extname = path.extname(filepath)
        if (extname === '.css'){
            return 'text/css'
        }
    }
    

    const port = 5000;
    server.listen(port, () => {
        console.log('first')
    })
