/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name: Ashyan Rahavi
 * email: rahavia@oregonstate.edu
 */

 
async function myTimer() {
    console.log('This prints every second');
}
//setInterval(myTimer, 1000);

var express = require('express');
var app = express.createServer();

var fs = require('fs');
var http = require('http');

console.log('Caching index');
var indexPage = fs.readFileSync('public/index.html', 'utf-8');
console.log('Caching css style');
var cssStyle = fs.readFileSync('public/style.css', 'utf-8');
console.log('Caching benny img');
var indexJS = fs.readFileSync('public/index.js', 'utf-8');
console.log('Caching 404 page');
var page404 = fs.readFileSync('public/404.html', 'utf-8');

function requestHandler(req, res) {   
    console.log('== Request was received');
    console.log(req.url);
    console.log(req);
    var file;
    
    switch(req.url) {
        case '/index.html':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(indexPage);
            break;
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(indexPage);
            break;
        case '/style.css':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.write(cssStyle);
            break;
        case '/index.js':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/javascript');
            res.write(indexJS);
            break;
        case '/update-text':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            console.log(req.body.newText);
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write(page404);
            break;
    }
    
    res.end();
}

var server = http.createServer(requestHandler);
var port = process.env.PORT;
if(!port) {
    port = 3000;
}
server.listen(port, function(err) {
    if(err) {
        throw err;
   }
   console.log('Server is listening on port', port);
});