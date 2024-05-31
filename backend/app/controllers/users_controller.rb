class UsersController < ApplicationController
  before_action :authenticate_user!

  def me
    success_response(current_user)
  end
end
