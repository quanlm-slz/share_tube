class SharesController < ApplicationController
  before_action :authenticate_user!, only: :create

  def index
  end

  def create
    share = current_user.shares.create!(share_params)
    success_response(share)
  end

  private

  def share_params
    params.require(:share).permit(:url, :description)
  end
end
