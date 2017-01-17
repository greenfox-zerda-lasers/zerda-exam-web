'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('./validator.js');
var mysql = require("mysql");

var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "'jaj'",
  password: "alma",
  database: "secretprojects"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.post('/exam', function(req, res){
  var body = {
    "status": "ok",
    "projects": [
      "secret project 1",
      "secret project 2"
    ]
  }
  var errorBody = {
    "status": "error",
    "message": "thank you"
  }
  if (validator(req.body.email, req.body.scale, req.body.feedback)) {
    con.query("SELECT * FROM projects;",function(err,rows){
      body.projects = rows.map(function(row) {
        return row.project_name;
      });
      res.send(body);
    });
  } else {
    res.send(errorBody);
  }
})


app.listen(3000);
