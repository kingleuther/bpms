var connection = require('../mongo/connection');
var saving = require('../mongo/saving');
var replyURL = 'https://higashiyama-nanajo-812.questetra.net/System/Event/IntermediateMessage/21/24/receive';
function callback(router, axios, querystring, mongoose){
	/*connection(mongoose);*/
    router.post('/callback', function(req, res) {
    	if(req.body.events[0].postback != null && req.body.events[0].message == null){
            console.log("postback", req.body.events[0].postback);
            console.log("message",req.body.events[0].message);
            var parsedData = querystring.parse(req.body.events[0].postback.data);
            console.log("parsedData",parsedData);
            var repeatCounter = 0;

            (function resend(){
                setTimeout(callAxios,500,resend);
            })();

            function callAxios(resend){
                axios.post(replyURL,
                    querystring.stringify({
                        processInstanceId:parsedData.processInstanceId,
                        key:"NKOmgMAo36gnNvVnQwyKNojRwKh4gte0",
                        q_replymessage:parsedData.q_replymessage
                    }))
                    .then(function(response){
                            console.log('success');                
                    })            
                    .catch(function(error){
                            // console error here
                            console.log('failed');
                            if(repeatCounter >= 10) return;
                            repeatCounter++;
                            console.log(repeatCounter);
                            resend();
                    }); 
            }
        }
        res.send(true)    	
    });
}

module.exports = callback;