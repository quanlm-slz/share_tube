# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'User::Registrations' do
  let(:user) { attributes_for(:user) }
  let(:body) do
    {
      user:
    }
  end

  describe 'POST user/sign_up' do
    let(:request) { post '/user/sign_up', params: body }

    context 'when given insufficient data response' do
      let(:body) { { email: 'test@example.com' } }

      before { request }

      it_behaves_like('error_response', 422)
    end

    context 'when given sufficient data request' do
      it { expect { request }.to change(User, :count).by(1) }
    end

    context 'when given sufficient data response' do
      before { request }

      it_behaves_like('success_response')

      it { expect(json_body.dig('data', 'token')).not_to be_blank }
    end
  end
end
