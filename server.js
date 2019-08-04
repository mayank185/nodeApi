const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;



const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testDb'
});
 
mc.connect(function(err) {
    console.log('-----------Mayank--',err,'--------------nnnn');
    //debugger;
    if (err) throw err;
});

// mc.connect();

app.listen({
  port: 5000,
  host:'0.0.0.0'
});

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes.js'); //importing route
routes(app); //register the route
