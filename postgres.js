var fs = require('fs');
var pg = require('pg');
var readlineSync = require('readline-sync');

var secretstring = fs.readFileSync("../postgres.txt").toString();
secretstring = secretstring.replace(/(?:\n)/g,"");
var dbconnection = secretstring + "?ssl=true";

//import bad words text
var words = JSON.parse(fs.readFileSync("words/drugs.txt").toString());
var severity = 0;

//open db connection
var dbconn = new pg.Client(dbconnection);
dbconn.connect(function(err){
	if(err){
		return console.error('could not connect');
	}
	//loop through local words list and assign values
	for(i=0;i<words.length;i++){
		severity = readlineSync.question(words[i]+": ");
		dbconn.query("INSERT INTO words (word,severity,db_id) values(\'" + words[i] + "\',\'" + severity + "\',1);",function(err,result){
			if(err){console.log(err)}
		});
	}
});