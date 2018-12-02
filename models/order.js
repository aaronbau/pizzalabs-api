// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var orderSchema = new mongoose.Schema({
	name: String,
	address: String,
	notes: String,
	status: String,
	order: [{
		pizza: String
	}] 
});

// Return model
module.exports = restful.model('Orders', orderSchema);