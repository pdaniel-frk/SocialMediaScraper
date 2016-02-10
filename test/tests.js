var request = require("request");

var port = 8080;

request("http://localhost:" + port + "/users?id=2", function(error, response, body) {
	if(body){
		body = JSON.parse(body)
		console.log("Users:");
		console.log(body);
		console.log("\n");
	}
});

request("http://localhost:" + port + "/kids?twit_id=20293902", function(error, response, body){
	if(body){
		body = JSON.parse(body);
		console.log("Kids:");
		console.log(body);
		console.log("\n");
	}
});

request("http://localhost:" + port + "/words?id=1", function(error, response , body){
	if(body){
		body = JSON.parse(body);
		console.log("Words:")
		console.log(body);
		console.log("\n");
	}
});

request("http://localhost:" + port + "offending_tweets?twit_id=20293902", function(error, response, body){
	if(body){
		body = JSON.parse(body);
		console.log("Offending_Tweets:");
		console.log(body);
		console.log("\n");
	}
});