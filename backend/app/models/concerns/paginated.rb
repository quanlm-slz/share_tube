module Paginated
  extend ActiveSupport::Concern

  included do
    def self.fetch_page(params)
      order(created_at: :desc).page(params[:page]).per(params[:per])
    end
  end
end
