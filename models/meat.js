// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var meatSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number
});

// Return model
module.exports = restful.model('Meats', meatSchema);