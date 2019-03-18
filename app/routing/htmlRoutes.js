var path = require('path');

module.exports = function(app){

    app.get('/tables', function(req, res) {
        
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    
    });

    app.get('/reserve', function(req, res) {
        
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    
    });

    //this sends them to the homepage if they use the app and go to any url other than the ones defined above
    app.use(function(req, res) {
        
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    
    });
}