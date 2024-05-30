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
require 'rails_helper'

RSpec.describe Share, type: :model do
  let(:share) { build(:share) }

  describe 'validation' do
    it { expect(share).to validate_presence_of(:url) }
    it { expect(share).to validate_presence_of(:description) }
  end

  describe 'association' do
    it { expect(share).to belong_to(:user) }
  end
end
