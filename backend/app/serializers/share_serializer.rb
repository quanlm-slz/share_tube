class ShareSerializer < ActiveModel::Serializer
  attributes :id, :url, :description, :username

  def username
    object.user.username
  end
end
