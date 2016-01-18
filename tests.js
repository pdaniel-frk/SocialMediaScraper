var assert = require("assert");
var request = require("request");

request("http://localhost:9998/users?id=2", function(error, response, body) {
	body = JSON.parse(body)
	console.log(body);
});


request("http://localhost:9998/kids?twit_id=20293902", function(error, response, body){
	if(body){
		body = JSON.parse(body);
		console.log(body);
	}
});

request("http://localhost:9998/words?id=1", function(error, response,body){
	if(body){
		body = JSON.parse(body);
		console.log(body);
	}
});