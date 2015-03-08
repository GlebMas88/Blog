class PostsController < ApplicationController
	before_action :set_post, only: [:show, :upvote]
	
	def index
		@posts = Post.all
	end
	
	def create
		@post = Post.cerate(post_params)
		redirect_to @post
	end
	
	def show
	end
	
	def upvote
		@post.increment!(:upvotes)
	end
	
	private
	def post_params
		params.require(:post).permit(:title, :content)
	end
	
	def set_post
		@post = Post.find(params[:id])
	end
end
