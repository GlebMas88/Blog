angular.module('blog')
	.controller("PostsCtrl", [
		"$stateParams",
		"postService",
		function ($stateParams, postService) {
			var vm = this;
			vm.post = postService.postsList[$stateParams.id];
			
			vm.addComment = function () {
				if (vm.body === "") { return; }
				vm.post.comments.push ({
					body: vm.body,
					author: "User",
					upvotes: 0
				});
				vm.body = "";
			};
			
			vm.incrementUpvotes = function (comment) {
				comment.upvotes += 1;
			}
	}]);