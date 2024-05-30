shared_examples 'paginated_response' do
  it { expect(response).to have_http_status(:success) }
  it { expect(json_body['message']).to eq('success') }
  it { expect(json_body.dig('data', 'items')).not_to be_nil }
  it do
    expect(json_body.dig('data', 'pagination').keys)
      .to include('current_page', 'next_page', 'prev_page', 'page_limit', 'total_item')
  end
end
