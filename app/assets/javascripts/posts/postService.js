angular.module("blog")
	.factory ('postService', [
    "$http",
		function ($http) {
			var postService = {
				postsList: []
			};
      
      postService.getPosts = function () {
        return $http.get("/posts.json").success(function (data) {
          postService.postsList = data.posts;
        });
      };
      
      postService.createPost = function (post) {
        return $http.post("/posts.json", post).success(function (data) {
          postService.postsList.push(data);
        });
      };
      
      postService.upvotePost = function (post) {
        return $http.put("/posts/" + post.id + "/upvote.json").success(function (data) {
          post.upvotes += 1;
        });
      };
      
      postService.getPost = function (id) {
        return $http.get("/posts/" + id + ".json").then(function (resp) {
          return resp.data;
        });
      };
      
      postService.addComment = function (id, comment) {
        return $http.post("/posts/" + id + "/comments.json", comment);
      };
			
      postService.upvoteComment = function (post, comment) {
        return $http.put("/posts/" + post.id + "/comments/" + comment.id + "/upvote.json")
                    .success(function (data) {
                      comment.upvotes += 1;
                    });
      };
			return postService;
	}]);