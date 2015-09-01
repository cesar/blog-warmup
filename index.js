
var SERVER_PORT = 4567,
	SERVER_HOST = 'localhost';

var Hapi = require('hapi'),
	Article = require('./article');

//Create server object
var server = new Hapi.Server();

// Create a connection, server can have more than one connection, but for the sake of this demo,
// it will have only one connection, at port 4567
server.connection({
	port : SERVER_PORT,
	host : SERVER_HOST
});


var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

var db = mongo.connect(url, function(err, db){
		if(err) {
			throw new Error('Database connection failed');
		}
		console.log('Connected to database instance');
		return db
});

//Handle routes here
server.route({
	method : 'GET', 
	path : '/',
	handler : function(req, res){
		res('Hello World');
	}
})


//Start the server
server.start(function() {
	console.log('The server has started at port ' + SERVER_PORT);
});