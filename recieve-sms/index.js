var express = require('express');
var bodyParser = require('body-parser');
var stringSimilarity = require('string-similarity');
const accountSid = 'someotherkey';
const authToken = 'somekey';
const client = require('twilio')(accountSid, authToken);
var app = express();
var firebase = require('firebase').initializeApp({
    serviceAccount: "./textAutomation-61f9cef0b9fc.json",
    databaseURL: "https://textautomation.firebaseio.com/"
});


var ref = firebase.database().ref();

var commands = ['turn light on', 'turn light off'];


var BreakException = {};
app.use(bodyParser.urlencoded({extended: false}));
app.post('/message',function (req,res){
    //console.log(req.body);
    var msgFrom = req.body.From;
    var msgBody = req.body.Body;
    var match = false;
    var state;
    console.log(msgBody);
    try{
    commands.forEach(function(x){
        var sim = stringSimilarity.compareTwoStrings(msgBody.toLowerCase(),x);
        if ( sim >= 0.9){
            
            if (commands[0] == x){
                state = 'N'
                ref.set({text : 'true'});
            }
            if (commands[1] == x ){
                state = 'F'
                ref.set({text : 'false'});
            }
            match = true;
            throw BreakException;
        }
    })
}
catch(e){
    if (e !== BreakException) throw e;
    var gettingbodied = "Something went wrong"
    if (state = 'N'){
        gettingbodied = "Light Turned on Sucessfully"
    }
    else if (state == 'F'){
        gettingbodied = "Light Turned off Sucessfully"        
    }
    // client.messages.create(
    //     {
    //       body: gettingbodied,
    //       to: '+12894898798',
    //       from: '+13656516070',
    //     },
    //     (err, message) => {
    //       process.stdout.write(message);
    //     }
    //   );
    
}

//if (!match){
//     client.messages.create(
//         {
//           body: "Sorry that request does not match any of your commands",
//           to: '+12894898798',
//           from: '+13656516070',
//         },
//         (err, message) => {
//           process.stdout.write(message);
//         }
//       );

// }

    


});

app.listen(3000);
