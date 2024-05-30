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

  def paginated_response(items, status: 200)
    render(
      json: {
        status:,
        message: 'success',
        data: {
          items:,
          pagination: {
            current_page: items.current_page,
            next_page: items.next_page,
            prev_page: items.prev_page,
            page_limit: items.limit_value,
            total_item: items.total_count
          }
        }
      }
    )
  end
end
