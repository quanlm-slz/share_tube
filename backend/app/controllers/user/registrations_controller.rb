# frozen_string_literal: true

class User::RegistrationsController < Devise::RegistrationsController
  def create
    super { |user| raise ActiveRecord::RecordInvalid, user unless user.persisted? }
  end

  protected

  def respond_with(user, **_args)
    sign_out
    success_response(user, status: 201)
  end
end
