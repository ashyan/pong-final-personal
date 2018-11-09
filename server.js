/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name: Ashyan Rahavi
 * email: rahavia@oregonstate.edu
 */
 
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: true});

async function myTimer() {
    console.log('This prints every second');
}
//setInterval(myTimer, 1000);

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

app.get("/update-text", function(req, res) {
	res.render('update-text', {qs: req.query});
});

app.post("/update-text", urlencodedParser, function(req, res) {
	console.log(req.body);
	res.render('update-text-success', {data: req.body});
});

app.use(express.static("public"));


/*
function requestHandler(req, res) {   
    console.log('== Request was received');
    console.log(req.url);
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
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write(page404);
            break;
    }
    
    res.end();
}
*/

var port = process.env.PORT;
if(!port) {
    port = 3000;
}
app.listen(port, function(err) {
    if(err) {
        throw err;
   }
   console.log('Server is listening on port', port);
});