// require server modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// create express instance
var app = express();

// set up bodyParser to send/read JSON
app.use(bodyParser.json());


// static content
app.use(express.static(path.join(__dirname, "./client/dist")));

require('./config/mongoose.js');
require('./config/routes.js')(app);


// listen on this port
app.listen(8001, function(){
    console.log("you are browsin' on port 8001");
})

