Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :crateLink , function: Resolvers::CreateLink.new
  field :craeteUser , function: Resolvers::CreateUser.new
end
