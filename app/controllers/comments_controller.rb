class CommentsController < ApplicationController
	before_action :set_post
	before_action :set_comment, only: [:show, :upvote]
	
	def create
		@comment =  @post.comments.create(comment_params)
		redirect_to @comment
	end
	
	def show
	end
	
	def upvote
		@comment.increment!(:upvotes)
	end
	
	private
	def comment_params
		params.require(:comment).permit(:body)
	end
	
	def set_post
		@post = Post.find(params[:post_id])
	end
	
	def set_comment
		@comment = @post.comments.find(params[:id])
	end

end
