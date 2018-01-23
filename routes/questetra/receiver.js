'use strict';
function receiver(router, client){
  
  router.post('/receiveFromQuest', function(req, res) {
    console.log("req.body",req.body);
    var lineId = 'U34f149724f23c004673a3e11409ed3c0';
    //at this point 6 is japanese or leuther is japanese
    const message = {
      "type": "template",
      "altText": "this is a confirm template",
      "template": {
          "type": "confirm",
          "text":  req.body.overtime_reason,
          "actions": [
              {
                "type": "postback",
                "label": "Approve",
                "text":  req.body.overtime_reason,
                "data": "processInstanceId="+req.body.process_id+"&key=NKOmgMAo36gnNvVnQwyKNojRwKh4gte0"
              },
              {
                "type": "postback",
                "label": "Decline",
                "text":  req.body.overtime_reason,
                "data": "processInstanceId="+req.body.process_id+"&key=NKOmgMAo36gnNvVnQwyKNojRwKh4gte0"
                
              }
          ]
      }
    
        }
    
        client.pushMessage(lineId, message)
            .then(() => {
              // getting the message recieved from questetra and passing to line API 
              console.log('The message: ', req.body.overtime_reason, 'message has ben sent'); 
              // test save data
            })
            .catch((err) => {
              console.log("error",err);
            });
          res.send(true);
    


    });
}
module.exports = receiver;