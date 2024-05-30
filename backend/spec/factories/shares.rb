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
FactoryBot.define do
  factory :share do
    user
    url { Faker::Internet.url }    
    description { Faker::Lorem.paragraph }
  end
end
