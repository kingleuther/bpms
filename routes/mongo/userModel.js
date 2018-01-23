var mongoose = require('mongoose');
// schema
var userSchema = mongoose.Schema({
	employeeID: Number,
	employeeName: String,
	employeeEmail: {
		type: String
	},
	lineID: String,
	locale: String
});

// transaction model
var userModel = mongoose.model('users', userSchema);  

// user model
// var userModel = mongoose.model('user', transactionSchema);

// insert other models - tokens, etc
// module.exports = userModel;
module.exports = userModel;   
