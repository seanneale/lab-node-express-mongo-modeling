const mongoose = require('mongoose');

var terminalSchema = new mongoose.Schema({
	name: String,
	flights: [flightSchema],
	capacity: Number
});

var Terminal = mongoose.model('Airport', terminalSchema);

module.exports = Terminal;