# == Schema Information
#
# Table name: shares
#
#  id          :uuid             not null, primary key
#  description :string(300)      not null
#  url         :string(300)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :uuid
#
# Indexes
#
#  index_shares_on_user_id  (user_id)
#
class Share < ApplicationRecord
  belongs_to :user
  after_save :broadcast_share_creation, if: :id_previously_changed?

  validates_presence_of :url
  validates_presence_of :description

  def broadcast_share_creation
    ActionCable.server.broadcast(
      "notification_channel",
      {
        type: "new notification",
        username: user.username
      }
    )
  end
end
