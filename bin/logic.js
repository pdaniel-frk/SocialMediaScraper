var twit = require('twit');
var pg = require('pg');
var sql = require('sql');
var fs = require('fs');
var scheme = require('./db_utils/scheme.js')
//read Twitter credentials
var credentials = fs.readFileSync("../../credentials.txt").toString();
credentials = JSON.parse(credentials);

//db config
sql.setDialect('postgres');

//sql config
var users = scheme.users;
var words = scheme.words;
var kids = scheme.kids;
var offending_tweets = scheme.offending_tweets;

var query = kids.select(kids.star()).from(kids).toQuery();

var T = new twit(credentials)

var stream = T.stream('statuses/sample');

stream.on('favorite', function(request){
	console.log(request);
});

stream.on('tweet', function(tweet){
	console.log(tweet);
	stream.stop();
});

stream.on('error', function(error){
	console.log(error);
});