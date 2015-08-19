var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test',
	;

var Database = function(){
	this.db = mongo.connect(url, function(err, db){
		if(err) {
			throw new Error('Database connection failed');
		}

		console.log('Connected to database instance');

		return db;
	});
}

Database.prototype.insert = function(article){
	this.db.collection('articles').insertOne(article, function(err, result){
		if (err) {
			throw new Error('Failed to insert article');
		}
	});
}

Database.prototype.find = function(id){

	var cursor;
	//Search by id
	if (id) {
		cursor = this.db.collection('articles').find({ 'id' : id});
	} else {
		cursor = this.db.collection('articles').find();
	}

	var result = [];

	cursor.each(function(err, doc){
		if (err) {
			console.log(err);
		}

		result.push(doc);
	});

	return result;
}

Database.prototype.update = function(article){
	
}