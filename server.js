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
var socketIO = require('socket.io');

var urlencodedParser = bodyParser.urlencoded({extended: true});

async function myTimer() {
    console.log('This prints every second');
}
//setInterval(myTimer, 1000);

app.use(function (req, res, next) {
	console.log("== Request made");
	console.log("  - Method:", req.method);
	console.log("  - URL:", req.url);
	next();
});

/*
app.get("/", function(req, res, next) {
    res.type('text/html');
    res.send(indexPage);
});

app.get("/index.html", function(req, res, next) {
    res.type('text/html');
    res.send(indexPage);
});

app.get("/style.css", function(req, res, next) {
    res.type('text/css');
    res.send(cssStyle);
});

app.get("/index.js", function(req, res, next) {
    res.type('application/javascript');
    res.send(indexJS);
});
*/

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post("/update-text*", function(req, res, next) {
    console.log('test');
    console.log(req.body);
});

app.get("*", function(req, res, next) {
    res.type('text/html');
    res.status(404).send(page404);
});

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

io.on('connection', function(socket) {
});