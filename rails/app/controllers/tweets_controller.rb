class TweetsController < ApplicationController
  def index
    user = User.find(session[:user_id])
    if user
      return render status: 200 , json: { status: 200, data: user.tweets.to_json}
    else
      return render status: 401 , json: { status: 401, data: 'error'}
    end 
  end
end
