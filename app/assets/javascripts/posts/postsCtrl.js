angular.module('blog')
	.controller("PostsCtrl", [
		"post",
		"postService",
		function (post, postService) {
			var vm = this;
			vm.post = post;
			
			vm.addComment = function () {
				if (vm.body === "") { return; }
				postService.addComment(post.id, {
					body: vm.body,
					author: "User"
				}).success(function (comment) {
				  vm.post.comments.push(comment);
				})
				vm.body = "";
			};
			
			vm.incrementUpvotes = function (comment) {
				postService.upvoteComment(post, comment);
			}
	}]);