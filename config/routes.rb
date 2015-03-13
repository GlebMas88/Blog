EverydayNews::Application.routes.draw do
  devise_for :users
	root to: "application#angular"
	
	resources :posts, only: [:index, :create, :show] do
		resources :comments, only: :create do
		  put "/upvote" => "comments#upvote"
		end
	  put "/upvote" => "posts#upvote"
	end
end
