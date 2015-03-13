angular.module("blog")
	.controller("MainCtrl", [
		"postService",
		function (postService) {
			var vm = this;		
			vm.postsList = postService.postsList;
		
			vm.addPost = function () {
				if (!vm.title || vm.title === "") { return; }
				postService.createPost({
					title: vm.title,
					content: vm.content
				});
				vm.title = "";
				vm.content = "";
			};
		
			vm.incrementUpvotes = function (post) {
				postService.upvotePost(post);
			}
	}]);