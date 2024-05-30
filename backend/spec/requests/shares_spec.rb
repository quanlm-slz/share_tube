require 'rails_helper'

RSpec.describe "Shares", type: :request do
  describe "GET /index" do
    let(:request) { get '/shares' }

    context 'when response' do
      before { request }

      it_behaves_like 'paginated_response'
    end
  end

  describe "POST /create" do
    let(:params) { { share: attributes_for(:share) } }
    let(:user) { create(:user) }
    let(:headers) { { } }
    let(:request) { post '/shares', params:, headers:}

    context 'when user not signed in response' do
      before { request }

      it_behaves_like 'error_response', 401
    end

    context 'when user signed in and not provide body data response' do
      include_context 'when user signed in'

      let(:params) { }

      before { request }

      it_behaves_like 'error_response', 400
    end

    context 'when user signed in and provide insufficient body data response' do
      include_context 'when user signed in'

      let(:params) { { share: { url: attributes_for(:share)[:url] } } }
      before { request }

      it_behaves_like 'error_response', 422
    end

    context 'when user signed in and provide sufficient body data request' do
      include_context 'when user signed in'
      
      it { expect { request }.to change { user.shares.count } .by(1) }
    end

    context 'when user signed in and provide sufficient body data response' do
      include_context 'when user signed in'

      before { request }

      it_behaves_like 'success_response'
    end
  end
end
