const lib = require('lib')({token: "VZVeF1KWCfRoB5XSge_4jAss1RmqO8GXLA20uQbBdDADq1SRvhpHnlRvWh6RL6T6" });
/**
* A basic Hello World function
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime 
* @returns {string}
*/
module.exports = async (sender,receiver,message,createdDatetime, context) => {
  
 let result =  await lib.messagebird.tel.sms({
    originator: "18677941384", // (required)
    recipient: "13656516070", // (required)
    body: message // (required)
  });
  

  return "Sent Text";

};