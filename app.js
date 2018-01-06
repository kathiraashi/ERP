const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
         console.log('not connect to database:', err); 
        }
    else{ 
        console.log('Connected To database :' + config.db); 
    }
});


app.use(cors({
    origin: 'http://localhost:4200'
}));


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/view/dist/'));
app.use('/authentication', authentication);


app.get('/', (req, res) => {
    res.send(path.join(__dirname + '/view/dist/index.html'));
});


app.listen(8080, ()=>{
   console.log('Server Started On Port : 8080');
});