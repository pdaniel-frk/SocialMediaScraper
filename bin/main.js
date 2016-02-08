var express = require('express');
var sequelize = require('sequelize');
var pg = require('pg');
var pg-hstore = require('pg-hstore');
var fs = require('fs');
		
var app = express();
app.disable("x-powered-by");

//read db connection string
var secretstring = fs.readFileSync("../../postgres.txt").toString();
secretstring = secretstring.replace(/(?:\n)/g,"") + "?ssl=true";

app.get('/', function(req, res){
	
});

app.listen(8080);