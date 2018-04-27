Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.ID
  field :name, !types.String
  field :email, !types.String
  connection :tweets, !Types::TweetType.connection_type
end
