// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Dough = require('../models/dough');
var Cheese = require('../models/cheese');
var Meat = require('../models/meat');
var Vegetable = require('../models/vegetable');

// Routes
Dough.methods(['get']);
Dough.register(router, '/doughs');

Cheese.methods(['get']);
Cheese.register(router, '/cheeses');

Meat.methods(['get']);
Meat.register(router, '/meats');

Vegetable.methods(['get']);
Vegetable.register(router, '/vegetables');

// Return router
module.exports = router;