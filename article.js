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

Article.prototype.getTitle = function(){
	console.log('Title: ' + this.title);
}

module.exports = Article;