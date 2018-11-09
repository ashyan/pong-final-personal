/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name: Ashyan Rahavi
 * email: rahavia@oregonstate.edu
 */
 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO.listen(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));
// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});
// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

io.on('connection', function(socket) {
	console.log("new client connected");
});
setInterval(function() {
  io.sockets.emit('message', 'hi!');
}, 1000);

/*
var urlencodedParser = bodyParser.urlencoded({extended: true});

var port = process.env.PORT;
if(!port) {
    port = 3000;
}
app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));

app.use(function (req, res, next) {
	console.log("== Request made");
	console.log("  - Method:", req.method);
	console.log("  - URL:", req.url);
	next();
});

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname,'static', 'index.html'));
});


app.use(express.static('static'));

app.get("/", function(req, res, next) {
    res.type('text/html');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/index.html", function(req, res, next) {
    res.type('text/html');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/style.css", function(req, res, next) {
    res.type('text/css');
    res.send(cssStyle);
});

app.get("/index.js", function(req, res, next) {
    res.type('application/javascript');
    res.send(indexJS);
});


app.use(express.static('static'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post("/update-text*", function(req, res, next) {
    console.log(req.body);
});

app.get("*", function(req, res, next) {
    res.type('text/html');
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


server.listen(port, function(err) {
    if(err) {
        throw err;
   }
   console.log('Server is listening on port', port);
});


io.on('connection', function(socket) {
	console.log("new client connected");
});
setInterval(function() {
  io.sockets.emit('message', 'hi!');
}, 1000);
*/