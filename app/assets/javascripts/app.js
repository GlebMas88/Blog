angular.module("blog", ["ui.router", "templates"])
	.config([
		"$stateProvider",
		"$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("home", {
					url: "/home",
					templateUrl: "home/_home.html",
					controller: "MainCtrl as main",
          resolve: {
            postPromise: ['postService', function (postService) {
              return postService.getAll();
            }]
          }
				})
				.state ("posts", {
					url: "/posts/:id",
					templateUrl: "posts/_posts.html",
					controller: "PostsCtrl as posts"
				});
				$urlRouterProvider.otherwise("home");
	}]);