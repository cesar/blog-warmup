//Article class to store all the properties of an article
var Article = function(title, content){
	//An article must have a title and content
	if (!title || title === "") {
		throw new Error('Article must have a valid title attribute');
	}

	if (!content || content === "") {
		throw new Error('Article must have a valid content attribuet');
	}

	this.title = title;

	this.content = content;
}

var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

mongo.connect(url, function(err, db){
		if(err) {
			throw new Error('Database connection failed');
		}
		console.log('Connected to database instance');
		db.close();
});

Article.prototype.getTitle = function(){
	return this.title;
}

Article.prototype.setTitle = function(title){
	this.title = title;
}

Article.prototype.getContent = function(){
	return this.content;
}

Article.prototype.setContent = function(content){
	this.content = content;
}

//CRUD Operations

//GET
Article.prototype.find = function(id){
	
}

//INSERT
Article.prototype.save = function(){
		
}

//PUT
Article.prototype.update = function(title, content){

}

//DELETE
Article.prototype.delete = function(id){

}

module.exports = Article;