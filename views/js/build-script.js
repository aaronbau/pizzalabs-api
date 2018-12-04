var doughs = [];
var cheeses = [];
var meats = [];
var vegetables = [];
var cart = [];

$.ajax({
	method: 'GET',
	url: '/api/doughs',
	data: 'json',
	success: successDough
});

$.ajax({
	method: 'GET',
	url: '/api/cheeses',
	data: 'json',
	success: successCheese
});

$.ajax({
	method: 'GET',
	url: '/api/meats',
	data: 'json',
	success: successMeat
});

$.ajax({
	method: 'GET',
	url: '/api/vegetables',
	data: 'json',
	success: successVegetable
});

function successDough(data) {
	data.forEach(function(result) {
		doughs.push(new Item(result.name, result.description, result.price));
		$('#doughsdiv').append("<b>" + result.name + "</b> - " + result.price + "<br>" + result.description + "<br>");
	})
}

function successCheese(data) {
	data.forEach(function(result) {
		cheeses.push(new Item(result.name, result.description, result.price));
		$('#cheesesdiv').append("<b>" + result.name + "</b> - " + result.price + "<br>" + result.description + "<br>");
	})
}

function successMeat(data) {
	data.forEach(function(result) {
		meats.push(new Item(result.name, result.description, result.price));
		$('#meatsdiv').append("<b>" + result.name + "</b> - " + result.price + "<br>" + result.description + "<br>");
	})
}

function successVegetable(data) {
	data.forEach(function(result) {
		vegetables.push(new Item(result.name, result.description, result.price));
		$('#vegetablesdiv').append("<b>" + result.name + "</b> - " + result.price + "<br>" + result.description + "<br>");
	})
}

function Item(name, description, price) {
	this.name = name;
	this.description = description;
	this. price = price;
}