var Article = require('./ArticleModel');

var articles = [
	{
		title : "Apolonia",
		content : "Apolonia appears in the first Godfather movie, Michael falls in love with her"
	},
	{
		title : "Imigration",
		content : "Imigration is a very hot topic right now"
	},
	{
		title : "Vacation",
		content : "Vacation is so far away it feels like an eternity away"
	}
];

var ArticleController = {
	//Get all the articles in the database and render them
	index : {
		method : "GET",
		path : '/articles',
		handler : function(request, response) {

			response.view('index', {
				title : "Epic Blog is Epic",
				articles : articles
			});
		}
	},
	//Render a single article
	showArticle : {
		method : "GET",
		path : '/articles/{id}',
		handler : function(request, response) {
			response.view('show', {
				title : articles[request.params.id].title,
				body : articles[request.params.id].content
			});
		}
	},
	//Render page to create a new article
	newArticle : {
		method : "GET",
		path : "/new_article",
		handler : function(request, response) {
			response.view('new', { title : 'New Article'});
		}
	},
	createArticle : {
		method : "POST",
		path : "/articles",
		handler : function(request, response) {
			console.log(request.payload);
			response.redirect('/articles');
		}
	},
	updateArticle : {
		method : "GET",
		path : "/edit_article/{id}",
		handler : function(request, response) {
			response.view('edit', {
				title : articles[request.params.id].title,
				body : articles[request.params.id].content
			});
		}
	},
	editArticle : {
		method : "PUT",
		path : "/article/{id}",
		handler : function(request, response) {
			
		}
	},
	deleteArticle : {
		method : "DELETE",
		path : '/article/{id}',
		handler : function(request, response) {
			
		}
	}
}

module.exports = ArticleController;
