Rails.application.routes.draw do
  devise_for :users, skip: :all

  as :user do
    namespace :user do
      post "/sign_up", to: "user/registrations#create"
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
