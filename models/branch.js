// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var branchSchema = new mongoose.Schema({
	name: String,
	address: String
});

// Return model
module.exports = restful.model('Branches', branchSchema);