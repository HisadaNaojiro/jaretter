Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createUser  , function: Resolvers::CreateUser.new
  field :signinUser  , function: Resolvers::SignInUser.new
  field :createTweet , function: Resolvers::CreateTweet.new
end
