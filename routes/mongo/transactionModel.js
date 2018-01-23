var mongoose = require('mongoose');
// schema
var transactionSchema = mongoose.Schema({
	processInstanceID: Number,
	message: String,
	key: String,
	overtimeDate: Date,
	overtimeStartTime: String,
	overtimeEndTime: String, 
	title: String,
	approverID: Number,
	replyMessage: String,  
	isSentToLine: Boolean, // check if message was sent to-from bpm-line-node
	isSentToQuestetra: Boolean,
	pending: Boolean
});

// transaction model
var transactionModel = mongoose.model('transaction', transactionSchema);  

module.exports = transactionModel;   
