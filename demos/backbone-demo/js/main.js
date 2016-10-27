(function() {

window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};

App.Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'show/:id': 'show',
		'download/*random': 'download',
		'search/:query': 'search',
		'*other': 'default'
	},

	index: function() {
		$(document.body).append("调用了 Index 路由<br>");
	},

	show: function(id) {
		$(document.body).append("调用了 Show 路由，id 等于 " + id + "<br>");
	},

	download: function(random) {
		$(document.body).append("调用了 Download 路由，参数等于 " + random + "<br>");
	},

	search: function(query) {
		$(document.body).append("调用了 Search 路由，参数等于 " + query + "<br>");
	},

	default: function(other) {
		$(document.body).append("你访问的 " + other + " 路由未定义<br>");
		
	}

});

new App.Router();
Backbone.history.start();

})();
