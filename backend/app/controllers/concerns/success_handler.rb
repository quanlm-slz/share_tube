# frozen_string_literal: true

module SuccessHandler
  extend ActiveSupport::Concern

  def success_response(data, status: 200)
    render(
      json: {
        status:,
        message: 'success',
        data: ActiveModelSerializers::SerializableResource.new(data)
      },
      status:
    )
  end
end
