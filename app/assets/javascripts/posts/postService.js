angular.module("blog")
	.factory ('postService', [
    "$http",
		function ($http) {
			var postService = {
				postsList: []
			};
      
      postService.getAll = function () {
        return $http.get("/posts.json").success(function (data) {
          postService.postsList = data.posts;
        });
      };
			
			return postService;
	}]);