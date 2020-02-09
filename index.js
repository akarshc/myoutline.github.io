var express = require('express')
var app = express()
var port = process.env.PORT || 3004

// app.use(express.static('public'))
// app.use(express.static('files'))
app.use('/static', express.static('public'))

app.listen(port);
app.get('/', (req,res) => {
	res.sendfile("./view/index.html");
});

app.get('/about', (req,res) => {
	res.sendfile("./view/about.html");
});

app.get('/contact', (req,res) => {
	res.sendfile("./view/contact.html");
});

app.get('/work', (req,res) => {
	res.sendfile("./view/work.html");
});

app.get('/:any', (req,res) => {
	res.sendfile("./view/404.html");
});

console.log('API website is running on: ' + port);