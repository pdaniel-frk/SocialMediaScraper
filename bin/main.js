var express = require('express');
var pg = require('pg');
var fs = require('fs');
		
var app = express();
app.disable("x-powered-by");

//read db connection string
var secretstring = fs.readFileSync("../../postgres.txt").toString();
secretstring = secretstring.replace(/(?:\n)/g,"") + "?ssl=true";

//users
app.route('/users')
.all(function(req, res, next){
	
})
.get(function(req, res, next){

})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

//kids
app.route('/kids')
.get(function(req, res, next){

})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

//words
app.route('/words')
.get(function(req, res, next){

})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

//offending_tweets
app.route('/offending_tweets')
.get(function(req, res, next){

})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

app.listen(8080);