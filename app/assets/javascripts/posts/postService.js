angular.module("blog")
	.factory ('postService', [
		function () {
			var postService = {
				postsList: []
			};
			
			return postService;
	}]);