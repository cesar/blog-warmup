var Article = require('./ArticleModel');

var ArticleController = {
	index : {
		method : "GET",
		path : '/',
		handler : function(request, response) {
			response("hello world from main");
		}
	},
	getArticles : {
		method : "GET",
		path : "/articles",
		handler : function(request, response) {

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
	updateArticle = {
		method : "GET",
		path : "new_article/{id}",
		handler : function(request, response) {

		}
	},
	editArticle = {
		method : "PUT",
		path : "new_article",
		handler : function(request, response) {

		}
	},
	deleteArticle = {
		method : "DELETE",
		path : '/article/{id}',
		handler : function(request, response) {
			
		}
	}
}

module.exports = ArticleController;
