EverydayNews::Application.routes.draw do
	root to: "application#angular"
	
	resources :posts, only: [:index, :create, :show] do
		resources :comments, only: [:cerate, :show] do
		  put "/upvote" => "comments#upvote"
		end
	  put "/upvote" => "posts#upvote"
	end
end
