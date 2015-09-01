var mongoose = require("mongoose");

//Connect to local database instance
mongoose.coonect("mongodb://localhost:27017/test");

//Get a connection
var db = mongoose.connection;


//Check for errors
db.on('error', function(error){
	console.log(error)
});

db.once("open", function(){

	//Database connection sucess

	//Define schema
	var articleSchema = mongoose.Schema({
		title : String,
		content : String
	});

	//Compile into model
	var Article = mongoose.model("Article", articleSchema);

});


module.exports = db;