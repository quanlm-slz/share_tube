# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :created_at, :updated_at
  attribute :token, if: :token_exists?

  def token_exists?
    object.token.present?
  end
end
