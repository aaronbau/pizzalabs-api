// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/views"));

// MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://aarontbautista:abcd1234@ds119374.mlab.com:19374/pizzalabs');

// Start server
var port = process.env.PORT || 8080
var server= app.listen(port);

// Routes
app.use('/api', require('./routes/api'));

app.get('/', function(req, res) {
	res.render('index');
})

app.get('/cart', function(req, res) {
	res.render('cart');
})

app.get('/build', function(req, res) {
	res.render('build');
})