const mongoose = require('mongoose');

var airportSchema = new mongoose.Schema({
	name: String,
	country: String,
	terminals: [terminalSchema],
	opened: Date
});

var Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;