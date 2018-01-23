var transactionModel = require('./transactionModel');
function retrieve(router){

	router.get('/retrieve', function(req, res){
		// convert save code above to promise
		// var retrieveCollection = new transactionModel();
		transactionModel.find({})
		.exec() 
		.then(function(foundObject) {
			if(foundObject.length == 0) {
				var responseObject = undefined;
				console.log('No data');
				res.status(400).send(responseObject);
			} else {
				var responseObject = foundObject;
				console.log('This is your data: ', responseObject);
				res.send(responseObject);
			}	
		})
		.catch(function(err) {
			console.log(err);
			res.status(500).send();			
		});	
			
	});

}

module.exports = retrieve;