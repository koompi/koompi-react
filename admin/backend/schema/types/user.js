const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    avatar: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    isAdmin: { type: GraphQLBoolean },
    created_at: { type: GraphQLString }
  })
});

module.exports = UserType;
