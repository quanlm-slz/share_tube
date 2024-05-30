# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  def respond_to_on_destroy
    success_response("User signed out successfully")
  end

  def respond_with(user, **_opts)
    success_response(user)
  end
end
