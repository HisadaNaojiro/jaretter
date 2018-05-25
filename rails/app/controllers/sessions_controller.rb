class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      # ユーザーログイン後にユーザー情報のページにリダイレクトする
      session[:user_id] = user.id
      return render status: 200 , json: { status: 200, message: 'success'}
    else
      return render status: 401 , json: { status: 401, message: 'error'}
    end
  end

  def delete
  end
end
