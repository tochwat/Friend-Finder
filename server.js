var express = require('express')
var bodyParser = require('body-parser')
//path is a built in node module so you dont need to install it, just require it
var path = require('path');

//load in the express library into the app variable, creating a new instance of express
var app = express()
var PORT = process.env.PORT || 8080
 
// server static assets
// app.use(express.static("public"));


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))

 
// parse application/json
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
//include html-routes.js for the app we are passing in using express
require('./app/routing/htmlRoutes.js')(app); 


app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
})