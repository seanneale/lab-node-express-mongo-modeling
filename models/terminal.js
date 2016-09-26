const mongoose = require('mongoose');
var flightReq = require('./flight.js');

var terminalSchema = new mongoose.Schema({
	name: String,
	flights: ['Flight'],
	capacity: Number
},{
	timestamps: true
});

var Terminal = mongoose.model('Terminal', terminalSchema);

module.exports = Terminal;