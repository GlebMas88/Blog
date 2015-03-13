class CommentsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
	before_action :set_post
	
	def create
		@comment =  @post.comments.create(comment_params)
	end
	
	def upvote
    @comment = @post.comments.find(params[:comment_id])
		@comment.increment!(:upvotes)
	end
	
	private
	def comment_params
		params.require(:comment).permit(:body, :author)  
	end
	
	def set_post
		@post = Post.find(params[:post_id])
	end
end
