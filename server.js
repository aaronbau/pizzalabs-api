var express = require('express');

var app = express();

var port = process.env.PORT || 8080

var server= app.listen(port, listening);

function listening() {
	console.log('listening. . .');
}

app.get('/', function(request, response) {
	response.send("Server is running on port " + port);
})