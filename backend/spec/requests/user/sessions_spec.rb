# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'User::Sessions' do
  let(:user) { create(:user) }
  let(:body) do
    {
      user: {
        email: user.email,
        password: 'password'
      }
    }
  end

  describe 'POST user/sign_in' do
    let(:request) { post '/user/sign_in', params: body }

    context 'when given valid data response' do
      before { request }

      it_behaves_like 'success_response'
      it { expect(json_body.dig('data', 'token')).not_to be_nil }
    end

    context 'when given invalid data response' do
      let(:body) do
        {
          user: {
            email: user.email,
            password: 'invalid_password'
          }
        }
      end

      before { request }

      it_behaves_like 'error_response', 401, 'Invalid Email or password.'
    end
  end

  describe 'DELETE user/sign_out' do
    let(:headers) { {} }
    let(:request) { delete '/user/sign_out', headers: }

    context 'when user not signed in request' do
      it { expect { request }.not_to change(Denylist, :count) }
    end

    context 'when user signed in request' do
      include_context 'when user signed in'

      it { expect { request }.to change(Denylist, :count).by(1) }
    end
  end
end
