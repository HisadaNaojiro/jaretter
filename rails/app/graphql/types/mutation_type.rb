Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :craeteUser , function: Resolvers::CreateUser.new
  field :signinUser , function: Resolvers::SignInUser.new
end
