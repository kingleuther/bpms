var japanese = require('../local/jp/receiverJp');
var english = require('../local/en/receiverEng');

function localechecker(locale){
    if(locale != '6'){
        
      console.log("EMPID IS NOT 6");
        text = {  
            Employee:english.Employee,
            OvertimeDate:english.OvertimeDate,
            StartTime:english.StartTime,
            EndTime:english.EndTime,
            Reason:english.Reason,
            Approved:english.Approved,
            Declined:english.Declined,
            Status:english.Status
                };
        label = {
             Approve:"Approve",
             Decline:"Decline"
            };     
    }else{
        text = {  
            Employee:japanese.Employee,
            OvertimeDate:japanese.OvertimeDate,
            StartTime:japanese.StartTime,
            EndTime:japanese.EndTime,
            Reason:japanese.Reason,
            Approved:japanese.Approved,
            Declined:japanese.Declined,
            Status:japanese.Status

         };
        label = {
            Approve:japanese.Approve,
            Decline:japanese.Decline
        };           
    }

    var localetext = {text:text,label:label};
    return localetext;
}

module.exports = localechecker;
