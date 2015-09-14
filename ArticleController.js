var Article = require('./ArticleModel');

var ArticleController = [

	reroute : {
		method : "GET",
		path : '/',
		handler : function(request, response) {
			response.redirect('/');
		}
	},
	//Get all the articles in the database and render them
	index : {
		method : "GET",
		path : '/articles',
		handler : function(request, response) {

			//Get all the articles
			Article.find(function(err, articles){
				if (err) {
					console.log('Oh no, I broke');
				}

				response.view('index', {
					title : 'Epic Blog is Epic',
					pageTitle : 'Articles',
					articles : articles
				});
			});

			
		}
	},
	//Render a single article
	showArticle : {
		method : "GET",
		path : '/articles/{id}',
		handler : function(request, response) {

			Article.find({ _id : request.params.id }, function(err, articles){

				response.view('show', {
					title : articles[0].title,
					body : articles[0].content,
					_id : articles[0]._id
				});
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
			
			//Create an instance of the Article model
			var article = new Article(request.payload);

			//Store in database
			article.save(function(err){
				if (err) {
					console.log('Oh no, something went wrong!');
				}

				response.redirect('/articles');
			});
		}
	},
	updateArticle : {
		method : "GET",
		path : "/edit_article/{id}",
		handler : function(request, response) {

			Article.find({ _id : request.params.id }, function(err, articles){
				if (err) {
					console.log('Oh no, this is broken');
				}

				if(articles.length > 0){
					response.view('edit', {
						title : articles[0].title,
						body : articles[0].content,
						_id : articles[0]._id
					});	
				} else {
					console.log('Article with the given index was not found');
					response.redirect('/articles');
				}
			});
		}	
	},
	editArticle : {
		method : "POST",
		path : "/articles/{id}",
		handler : function(request, response) {

			Article.update({_id : request.params.id}, {$set : request.payload}, function(err, article) {
				if (err) {
					console.log('Oh no, Im broken');
				}

				response.redirect('/articles');
			});
		}
	},
	deleteArticle : {
		method : "GET",
		path : '/delete_article/{id}',
		handler : function(request, response) {
			
			Article.remove({_id : request.params.id}, function(err, article){
				if (err) {
					console.log('Oh no, Im broken');
				}

				response.redirect('/articles');
			});
		}
	}
]

module.exports = ArticleController;
