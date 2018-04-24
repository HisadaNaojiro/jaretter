Types::TweetType = GraphQL::ObjectType.define do
  name 'Tweet'

  field :id , !types.ID
  field :contents , !types.String
  field :TweetedBy , -> { Types::UserType } , property: :user
end
