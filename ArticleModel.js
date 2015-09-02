var mongoose = require("mongoose");

//Connect to local database instance
mongoose.connect("mongodb://localhost:27017/test");

//Define schema
var articleSchema = mongoose.Schema({
	title : String,
	content : String
});

//Compile into model
mongoose.model("Article", articleSchema);

var db = mongoose.connection;

//The db object conatins many things, we are only interested in the model
module.exports = db.model('Article');