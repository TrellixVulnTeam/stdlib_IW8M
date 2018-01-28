const lib = require('lib')({token: "VZVeF1KWCfRoB5XSge_4jAss1RmqO8GXLA20uQbBdDADq1SRvhpHnlRvWh6RL6T6" });


/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/
module.exports = async (name = 'world', context) => {
  
 let result =  await lib.messagebird.tel.sms({
    originator: "18677941384", // (required)
    recipient: "2894898798", // (required)
    body: "What Up!!!!!" // (required)
  });
  

  return "Sent Text";

};





