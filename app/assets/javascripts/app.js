angular.module("blog", ["ui.router", "templates", "textAngular", "Devise"])
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
                        return postService.getPosts();
                    }]
                }
            })
            .state ("posts", {
                url: "/posts/:id",
                templateUrl: "posts/_posts.html",
                controller: "PostsCtrl as posts",
                resolve: {
                    post: ["postService", "$stateParams", function (postService, $stateParams) {
                        return postService.getPost($stateParams.id);
                    }]
                }
            })
            .state ("login", {
                url: "/login",
                templateUrl: "auth/_login.html",
                controller: "AuthCtrl as auth",
                onEnter: ['$state', 'Auth', function($state, Auth) {
                    Auth.currentUser().then(function (){
                        $state.go('home');
                    });
                }]
            })

            .state ("register", {
                url: "/register",
                templateUrl: "auth/_register.html",
                controller: "AuthCtrl as auth",
                onEnter: ['$state', 'Auth', function($state, Auth) {
                    Auth.currentUser().then(function (){
                        $state.go('home');
                    });
                }]
            })

			$urlRouterProvider.otherwise("home");
	}]);