class Resolvers::CreateTweet < GraphQL::Function
  argument :contents , !types.String
  
  type Types::TweetType

  def call(obj , args , ctx)
    Tweet.create!(
      contents: args[:contents],
      user: ctx[:current_user]
    )
  end
end
