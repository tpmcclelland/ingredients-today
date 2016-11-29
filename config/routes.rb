Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'landing/index'
  root 'landing#index'
  get  '/driver' => 'driver#index'
  get  '/cooker' => 'cooker#index'
end
