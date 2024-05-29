# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  def respond_to_on_destroy
    head :no_content
  end

  def respond_with(user, **_opts)
    success_response(user)
  end
end
