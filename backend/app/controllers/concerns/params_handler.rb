module ParamsHandler
  extend ActiveSupport::Concern

  def index_params
    params.permit(:page, :per)
  end
end
