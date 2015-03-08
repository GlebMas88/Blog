angular.module("blog")
	.controller("MainCtrl", [
		"postService",
		function (postService) {
			var vm = this;		
			vm.postsList = postService.postsList;
		
			vm.addPost = function () {
				if (!vm.title || vm.title === "") { return; }
				vm.postsList.push({
					title: vm.title,
					link: vm.link,
					upvotes: 0,
					comments: [
						{ author: "Joe", body: "Cool Post", upvotes: 0 },
						{ author: "Bob", body: "Great idea but everything is wrong", upvotes: 0 }
					]
				});
				vm.title = "";
				vm.link = "";
			};
		
			vm.incrementUpvotes = function (post) {
				post.upvotes += 1;
			}
	}]);