var express = require('express')
var bodyParser = require('body-parser')
//path is a built in node module so you dont need to install it, just require it
var path = require('path');

var app = express()
var PORT = process.env.PORT || 8080
 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
//include html-routes.js for the app we are passing in using express
require('./app/routing/htmlRoutes.js')(app); 


app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
})