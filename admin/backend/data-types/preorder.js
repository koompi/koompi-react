const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const PreorderType = new GraphQLObjectType({
  name: "Preorder",
  fields: () => ({
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    user_message: { type: GraphQLString },
    message: { type: GraphQLString },
    created_at: { type: GraphQLString },
  }),
});

module.exports = PreorderType;
