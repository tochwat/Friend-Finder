//these variables connect each of the responses below to the api routes and their corresponding json data
var friendData = require('../data/friends');
// var fs = require("fs");

 
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        console.log(req.body);
        let topMatch = {
            name: '',
            photo: '',
            totalDiff: 0
        };
        let userInput = req.body;
        console.log(`User's name is: ${userInput.name}`);
        console.log(`User's scores are: ${userInput.scores}`);

        friendData.push(req.body);
        res.json(true);
        // fs.appendFile('../data/friends', req.body, function () {
        //     res.end();
        // });
        
    });

    // app.post('/api/clear', function() {
    //     friends = [];

    //     console.log(friendData);
    // });

}