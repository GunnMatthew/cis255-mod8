/* 
localhost:8080 Should take users to index.html
localhost:8080/about should take users to about.html
localhost:8080/contact-me should take users to contact-me.html
404.html should display any time the user tries to go to a page not listed above.
*/

// import modules
const fs = require('fs');
const http = require('http');
const path = require('path');


// Create server
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if(filePath == './') {
        filePath = './index.html';
    }
    else if(filePath == './about') {
        filePath = './about.html';
    }
    else if(filePath == './contact-me') {
        filePath = './contact-me.html';
    }

    // Read/Serve file
    fs.readFile(filePath, (err, data) => {
        if(err) {
            fs.readFile('./404.html', (err, data) => {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(data);
            });
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// Server start/listen
server.listen(8080, () => {
    console.log('Server running at localhost:8080')
})


