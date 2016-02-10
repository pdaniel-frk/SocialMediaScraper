var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var fs = require('fs');
var sql = require('sql');

//express config
var app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());

//sql config
sql.setDialect('postgres');

//read db connection string
var secretstring = fs.readFileSync("../../postgres.txt").toString();
secretstring = secretstring.replace(/(?:\n)/g,"") + "?ssl=true";

//connect to db
var client = new pg.Client(secretstring);
client.connect(function(err){
	if(err){console.log(err)}
});

//db scheme
var users = sql.define({
	name: "users",
	columns: ['id','first', 'last', 'email', 'password', 'twit_id', 'db_id']
});

var offending_tweets = sql.define({
	name: "offending_tweets",
	columns: ['twit_id', 'text', 'id']
});

var kids = sql.define({
	name: "kids",
	columns: ['twit_id', 'severity', 'offending_tweets', 'last_processed']
});

var words = sql.define({
	name: "words",
	columns: ['id', 'word', 'severity', 'db_id']
});

//users
app.route('/api/v1/users/:id')
.all(function(req, res, next){
	console.log(req.method + " /api/v1/users/");
	next();
})
.get(function(req, res, next){
	var query = users.select(users.star()).from(users).where(users.id.equals(req.params.id)).toQuery();
	client.query(query, function(err, result){
		if(err){res.send("Error in processing the Query")}
		res.send(result.rows[0]);
	});
})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

//kids
app.route('/api/v1/kids/:id')
.all(function(req, res, next){
	console.log(req.method + " /api/v1/kids/");
	next();
})
.get(function(req, res, next){
	var query = kids.select(kids.star()).from(kids).where(kids.twit_id.equals(req.params.id)).toQuery();
	client.query(query, function(err, result){
		if(err){res.send("Error in processing the Query")}
		res.send(result.rows[0])
	});
})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

//words
app.route('/api/v1/words/:id')
.all(function(req, res, next){
	console.log(req.method + " /api/v1/words/");
	next();
})
.get(function(req, res, next){
	var query = words.select(words.star()).from(words).where(words.id.equals(req.params.id)).toQuery();
	client.query(query, function(err, result){
		if(err){res.send("Error in processing the Query")}
		res.send(result.rows[0]);
	});
})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

//offending_tweets
app.route('/api/v1/offending_tweets/:id')
.all(function(req, res, next){
	console.log(req.method + " /api/v1/offending_tweets/");
	next();
})
.get(function(req, res, next){
	var query = offending_tweets.select(offending_tweets.star()).from(offending_tweets).where(offending_tweets.twit_id.equals(req.params.id)).toQuery();
	client.query(query, function(err, result){
		if(err){res.send("Error in processing the Query")}
		res.send(result.rows[0]);
	});
})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});

app.listen(8080);