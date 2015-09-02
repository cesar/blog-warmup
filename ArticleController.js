var Article = require('./ArticleModel');

var articles = [
	{
		id : 1,
		title : "Apolonia",
		content : "Apolonia appears in the first Godfather movie, Michael falls in love with her"
	},
	{
		id : 2,
		title : "Imigration",
		content : "Imigration is a very hot topic right now"
	},
	{
		id : 3,
		title : "Vacation",
		content : "Vacation is so far away it feels like an eternity away"
	}
];

var ArticleController = {
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
	showArticle : {
		method : "GET",
		path : '/articles/{id}',
		handler : function(request, response) {
		
		}
	},
	newArticle : {
		method : "GET",
		path : "new_article",
		handler : function(request, response) {

		}
	},
	createArticle : {
		method : "POST",
		path : "/articles",
		handler : function(request, response) {

		}
	},
	updateArticle : {
		method : "GET",
		path : "new_article/{id}",
		handler : function(request, response) {

		}
	},
	editArticle : {
		method : "PUT",
		path : "new_article",
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
