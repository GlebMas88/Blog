class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :html, :json

  before_action :configure_permitted_parameters, if: :devise_controller?
	
	def angular
		render "layouts/application"
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in) << :username
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation) }
  end
end
