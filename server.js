const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'testDb',
    port:'3306'
});
 
mc.connect(function(err) {
    console.log('-----------Mayank--',err,'--------------nnnn');
    if (err) throw err;
});

// mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes.js'); //importing route
routes(app); //register the route
