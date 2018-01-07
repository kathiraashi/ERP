var express = require('express');
var bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
const jwt = require('jsonwebtoken');

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

// app.use(cors({
//     origin: 'http://localhost:4200'
// }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// app.use(express.static(__dirname + '/view/dist/'));

// define a simple route
// app.get('/', (req, res) => {
//     res.send(path.join(__dirname + '/view/dist/index.html'));
// });

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});



// Require routes
require('./app/routes/settings/crm-settings.routes.js')(app);
require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});