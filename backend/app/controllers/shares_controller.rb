class SharesController < ApplicationController
  before_action :authenticate_user!, only: :create

  def index
    shares = Share.includes(:user).fetch_page(index_params)
    paginated_response(shares)
  end

  def create
    share = current_user.shares.create!(share_params)
    ActionCable.server.broadcast(
      "notification_channel",
      {
        type: "new notification",
        username: share.user.username
      }
    )
    success_response(share)
  end

  private

  def share_params
    params.require(:share).permit(:url, :description)
  end
end
