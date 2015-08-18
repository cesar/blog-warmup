
var SERVER_PORT = 4567,
	SERVER_HOST = 'localhost';

var Hapi = require('hapi');

//Create server object
var server = new Hapi.Server();

// Create a connection, server can have more than one connection, but for the sake of this demo,
// it will have only one connection, at port 4567
server.connection({
	port : SERVER_PORT,
	host : SERVER_HOST
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