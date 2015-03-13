class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
  
	def index
		@posts = Post.all
	end
	
	def create
		@post = Post.create(post_params)
	end
	
	def show
    @post = Post.find(params[:id])
	end
	
	def upvote
    @post = Post.find(params[:post_id])
		@post.increment!(:upvotes)
	end
	
	private
	def post_params
		params.require(:post).permit(:title, :content)
	end
end
