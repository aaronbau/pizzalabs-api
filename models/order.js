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
		pizzas: [{
			dough: String,
			cheeses: [{ name: String }],
			meats: [{ name: String }],
			vegetables: [{ name: String }]
		}]
	}] 
});

// Return model
module.exports = restful.model('Orders', orderSchema);