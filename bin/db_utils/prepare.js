var fs = require('fs');
var readlineSync = require('readline-sync');

//import bad words text
var words = JSON.parse(fs.readFileSync("../../words/test.txt").toString());
var severity = 0;

//import json
var words_json = JSON.parse(fs.readFileSync("../../words/queries.json").toString());

//loop through local words list and assign values
for(i=0;i<words.length;i++){
	severity = readlineSync.question(words[i]+" severity: ");
	db_id = readlineSync.question(words[i]+" db_id: ");
	if(db_id == ''){
		db_id = 4;
	}
	words_json.array.push([words[i],severity,db_id]);
}
words_json = JSON.stringify(words_json);
fs.writeFileSync("../../words/queries.json",words_json);