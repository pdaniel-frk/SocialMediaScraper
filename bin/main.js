var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var fs = require('fs');
var sql = require('sql');
var scheme = require('./db_utils/scheme.js')

//express config
var app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());

//sql config
sql.setDialect('postgres');

//read db connection string
var secretstring = fs.readFileSync("../../local.txt").toString();
secretstring = secretstring.replace(/(?:\n)/g,"") + "?ssl=true";

//connect to db
var client = new pg.Client(secretstring);
client.connect(function(err){
	if(err){console.log(err)}
});

//sanaitization function
function sanaitize(unsafe){
var safe;
safe = unsafe.replace(/[^a-z0-9-_]/gim,"");
return safe;
}

var users = scheme.users;
var words = scheme.words;
var kids = scheme.kids;
var offending_tweets = scheme.offending_tweets;

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
.put(function(req, res, next){

})
.delete(function(req, res, next){

});
app.post('/api/v1/users', function(req, res){
	//var query = users.insert(users.)
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
		if(result){
			res.send(result.rows[0])
		}
	});
})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});
app.post('/api/v1/kids', function(req, res){

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
.put(function(req, res, next){

})
.delete(function(req, res, next){

});
app.post('/api/v1/words', function(req, res){

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
.put(function(req, res, next){

})
.delete(function(req, res, next){

});
app.post('/api/v1/offending_tweets', function(req, res){

});

app.listen(8080);