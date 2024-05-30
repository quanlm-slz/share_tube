# frozen_string_literal: true

#
# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  email                  :string(50)       default(""), not null
#  encrypted_password     :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  username               :string(50)       default(""), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#
require 'rails_helper'

RSpec.describe User do
  let(:user) { create(:user) }

  describe 'validation' do
    it { expect(user).to validate_presence_of(:username) }
    it { expect(user).to validate_uniqueness_of(:username).case_insensitive }
    it { expect(user).to validate_length_of(:username).is_at_most(50) }
  end

  describe 'association' do
    it { expect(user).to have_many(:shares).dependent(:destroy) }
  end
end
