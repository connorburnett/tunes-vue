let session = require('express-session')
let MongoDBStore = require('connect-mongodb-session')(session)

let store = new MongoDBStore(
	{
		uri: 'mongodb://con:con@ds159013.mlab.com:59013/tunes',
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error('SESSION ERROR:', error)
});

module.exports = session({
	secret: 'Hello',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})