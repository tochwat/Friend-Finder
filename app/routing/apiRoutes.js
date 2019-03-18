//these variables connect each of the responses below to the api routes and their corresponding json data
var tableData = require('../data/table-data');
var waitlistData = require('../data/waitinglist-data');
 
module.exports = function(app){

    app.get('/api/tables', function(req, res){
        res.json(tableData);
    });

    app.get('/api/waitlist', function(req, res){
        res.json(waitlistData);
    });

    app.post('/api/tables', function (req, res) {
        if (tableData.length <5) {
            tableData.push(req.body);
            //boolean value to trigger a diffent message to the user depending on which array we push information into
            res.json(true);
        } else {
            waitlistData.push(req.body);
            res.json(false);
        }
    });

    app.post('/api/clear', function() {
        tableData = [];
        waitlistData = [];

        console.log(tableData);
        console.log(waitlistData);
    });

}