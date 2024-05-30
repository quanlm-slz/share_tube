# frozen_string_literal: true

module ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_response
    rescue_from ActionController::ParameterMissing, with: :parameter_missing_response
  end

  def invalid_record_response(error)
    error_response(422, error.record.errors.full_messages)
  end
  
  def parameter_missing_response(error)
    error_response(400, error.message)
  end

  private

  def error_response(status, errors)
    render(
      json: {
        status:,
        message: 'error',
        errors:
      },
      status:
    )
  end
end
