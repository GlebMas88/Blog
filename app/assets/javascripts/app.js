angular.module("blog", ["ui.router", "templates"])
	.config([
		"$stateProvider",
		"$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("home", {
					url: "/home",
					templateUrl: "home/_home.html",
					controller: "MainCtrl as main"
				})
				.state ("posts", {
					url: "/posts/:id",
					templateUrl: "posts/_posts.html",
					controller: "PostsCtrl as posts"
				});
				$urlRouterProvider.otherwise("home");
	}]);