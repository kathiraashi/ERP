var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var jwt = require('jsonwebtoken');

// Configuring the database
var dbConfig = require('./app/config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url);
mongoose.connection.on('error', function(err) { console.log(err);
    process.exit();
});
mongoose.connection.once('open', function() { console.log("Successfully connected to the database");
});

// create express app
var app = express();

//create a cors middleware
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors(
    { origin: 'http://localhost:4200'}
));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());


// Require routes
require('./app/routes/settings/crm-settings.routes.js')(app);
require('./app/routes/note.routes.js')(app);


// //  Frandend Dist Route
// app.use(express.static(__dirname + '/view/dist/'));
// app.use(function(req, res) {
//      res.sendFile(path.join(__dirname, '/view/dist', 'index.html'));
// });


// define a simple route
app.get('*', function(req, res, next){
    res.send('This is Server Side Page');
});




// listen for requests
var port = process.env.PORT || 4000;

var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
