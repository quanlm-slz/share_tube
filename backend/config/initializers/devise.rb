# frozen_string_literal: true

Devise.setup do |config|

  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'

  require 'devise/orm/active_record'

  config.case_insensitive_keys = [:email]
  config.strip_whitespace_keys = [:email]

  config.jwt do |jwt|
    jwt.secret = Rails.application.credentials.jwt_secret_key
    jwt.dispatch_requests = [
      ['POST', 'user/sign_up'],
      ['POST', 'user/sign_in']
    ]
    jwt.revocation_requests = [
      ['DELETE', 'user/sign_out']
    ]
  end

  config.warden do |manager|
    manager.failure_app = FailureApp
  end

  config.stretches = Rails.env.test? ? 1 : 12

  config.reconfirmable = true

  config.expire_all_remember_me_on_sign_out = true

  config.password_length = 6..128

  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/

  config.reset_password_within = 6.hours

  config.navigational_formats = []
  config.sign_out_via = :delete

  config.responder.error_status = :unprocessable_entity
  config.responder.redirect_status = :see_other
end
