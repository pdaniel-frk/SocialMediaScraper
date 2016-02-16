var fs = require('fs');
var pg = require('pg');
var sql = require('sql');

var client;
var query = {};
query.text = "INSERT INTO \"words\" (\"word\", \"severity\", \"db_id\") VALUES ($1, $2, $3)";

//connect to db
var secretstring = fs.readFileSync("../../../local.txt").toString();
secretstring = secretstring.replace(/(?:\n)/g,"");
var dbconnection = secretstring + "?ssl=true";

//import json
var words_json = JSON.parse(fs.readFileSync("../../words/queries.json").toString());

var words_table = sql.define({
	name: "words",
	columns: ['id', 'word', 'severity', 'db_id']
});

//open db connection
var client_promise = new Promise(function(resolve,reject){
	var client = new pg.Client(dbconnection);
	client.connect();
	client.on('drain', client.end.bind(client))
	if(words_json.array.length == words_json.last_processed + 1){
		client.end();
		reject("Already processed");
	}
	if(words_json.last_processed >= words_json.array.length){
		client.end();
		reject("Maliformed last_processed");
	}
	for(i=words_json.last_processed + 1;i<words_json.array.length;i++){
		query.values = words_json.array[i];			
		client.query(query, function(){});
		if(i == words_json.array.length - 1){
			resolve(i);
		}
	}
});
client_promise.then(function(val){
	console.log(val + " words added");
	words_json.last_processed = words_json.array.length - 1;
	words_json = JSON.stringify(words_json);
	fs.writeFileSync("../../words/queries.json",words_json);
})
.catch(
	function(reason){
		console.log(reason)
	}
)