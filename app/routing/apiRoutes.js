//these variables connect each of the responses below to the api routes and their corresponding json data
var friendData = require('../data/friends');
// var fs = require("fs");

 
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        // console.log(req.body);

        let topMatch = {
            name: '',
            photo: '',
            matchDiff: 1000
        };
        let userInput = req.body;

        // console.log(`User's name is: ${userInput.name}`);
        // console.log(`User's scores are: ${userInput.scores}`);

        let totalDiff = 0;
        //loop through the entire friendData array
        for (let i=0; i< friendData.length; i++){

            //inner loop - loop across friend's scores to get absolute value of score difference
            for (let j=0; j<friendData[i].scores.length; j++) {
                totalDiff += Math.abs(userInput.scores[j] - friendData[i].scores[j]);
                console.log(`TotalDiff is: ${totalDiff}`);
            }

            //if totalDiff < topMatch.matchDiff , then set topMatch to the friendData[i] including the matchDiff amount
            if (totalDiff < topMatch.matchDiff) {
                topMatch.name = friendData[i].name;
                topMatch.photo = friendData[i].photo;
                topMatch.matchDiff = totalDiff;
            }
            //reset totalDiff before the next outer loop
            totalDiff = 0;
        }

        console.log(`Your top match is ${topMatch.name}`);

        
        //Push the user's input into the friends.js array of data
        friendData.push(req.body);
        res.json(true);
        
    });

}