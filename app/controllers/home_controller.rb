class HomeController < ApplicationController
  
  #GET #/:id
  def show
    @service = Service.find(params[:id])
  end
  
  
end
