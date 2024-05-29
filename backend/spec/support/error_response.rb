# frozen_string_literal: true

shared_examples 'error_response' do |status, error: nil|
  it { expect(response).to have_http_status(status) }
  it { expect(json_body['status']).to eq(status) }
  it { expect(json_body['message']).to eq('error') }
  it { expect(json_body['errors']).not_to be_empty }
  it { expect(json_body['errors']).to include(error) unless error.nil? }
end
