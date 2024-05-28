require 'rails_helper'

RSpec.describe "User::Registrations", type: :request do
  let(:user) { attributes_for(:user) }
  let(:body) do
    {
      user: user
    }
  end

  describe "POST /sign_up" do
    let(:request) { post '/user/sign_up', params: body }
    
    it { expect { request } .to change(User, :count).by(1) }
  end
end
