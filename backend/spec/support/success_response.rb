# frozen_string_literal: true

shared_examples 'success_response' do
  it { expect(response).to have_http_status(:success) }
  it { expect(json_body['message']).to eq('success') }
  it { expect(json_body['data']).not_to be_blank }
end
