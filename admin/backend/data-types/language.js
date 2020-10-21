const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const LangType = new GraphQLObjectType({
  name: "Lang",
  fields: () => ({
    id: { type: GraphQLString },
    lang: { type: GraphQLString },
    created_at: { type: GraphQLString },
  }),
});

module.exports = LangType;
