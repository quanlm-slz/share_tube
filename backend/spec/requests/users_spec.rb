require 'rails_helper'

RSpec.describe "Users", type: :request do
  let(:user) { create(:user) }
  
  describe 'POST users/me' do
    let(:headers) { { } }
    let(:request) { post '/users/me', headers: }

    context 'when user not signed in response' do
      before { request }

      it_behaves_like 'error_response', 401
    end

    context 'when user signed in response' do
      include_context 'when user signed in'
      before { request }

      it_behaves_like 'success_response'
    end
  end
end
