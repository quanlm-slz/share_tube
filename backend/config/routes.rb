Rails.application.routes.draw do
  devise_for :users, skip: :all

  as :user do
    namespace :user do
      post "/sign_up", to: "registrations#create"
      post "/sign_in", to: "sessions#create"
      delete "/sign_out", to: "sessions#destroy"
    end
  end

  post "users/me", to: "users#me"
  resources :shares, only: [:create, :index]

  mount ActionCable.server => '/cable'
  get "up" => "rails/health#show", as: :rails_health_check
end
