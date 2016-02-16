//db scheme
var sql = require('sql');
module.exports = {
users: sql.define({
	name: "users",
	columns: ['id','first', 'last', 'email', 'password', 'twit_id', 'db_id']
}),
offending_tweets: sql.define({
	name: "offending_tweets",
	columns: ['twit_id', 'text', 'id']
}),
kids: sql.define({
	name: "kids",
	columns: ['twit_id', 'severity', 'offending_tweets', 'last_processed']
}),
words: sql.define({
	name: "words",
	columns: ['id', 'word', 'severity', 'db_id']
}),
define: function(){
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
}
}