//these variables connect each of the responses below to the api routes and their corresponding json data
var friendData = require('../data/friends');
 
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });

    // app.post('/api/clear', function() {
    //     friends = [];

    //     console.log(friendData);
    // });

}