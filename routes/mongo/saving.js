var transactionModel = require('./transactionModel');
function saving(object, logger){
    // create instance of model transactionModel
    var newRequest = new transactionModel();
    newRequest.body = object;
    newRequest.message = object.message;
    newRequest.processInstanceID = object.processInstanceId;
    newRequest.key = object.key;
    newRequest.overtimeDate = object.overtimeDate;
		newRequest.overtimeStartTime = object.overtimeStartTime;
		newRequest.overtimeEndTime = object.overtimeEndTime; 
		newRequest.title = object.title;
		newRequest.employeeID = object.empID;
		newRequest.employeeName = object.empName;
		newRequest.employeeEmail = object.empEmail;
		newRequest.approverID = object.approverID;
		newRequest.replyMessage = object.replyMessage;
		newRequest.isSentToLine = object.isSentToLine;
    newRequest.isSentToQuestetra = object.isSentToQuestetra;
    // console.log("saving now...");

    newRequest.save()
      .then(function(savedObject) {
        // console.log('Save data: newRequest.message', newRequest.message, 'newRequest.processInstanceID', newRequest.processInstanceID);
        // console.log('The rest of your data: ', newRequest.body);
        logger.info('data saved');
      })
      .catch(function(err) {
        console.log(err);
        logger.info('save error');
        // logger.error(err);
        res.status(500).send('Internal server error');
      });
}

module.exports = saving;