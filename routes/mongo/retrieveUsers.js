var userModel = require('./userModel');
function retrieveUsers(managerEmail, managerID, logger){
		// convert save code above to promise
		var users = userModel.find({employeeEmail: managerEmail});
		
		users
		.exec(function(res, err){
			logger.info("test");
			logger.error("retrieveUsers error: ", err);
		});
		

    return users;
}

module.exports = retrieveUsers;