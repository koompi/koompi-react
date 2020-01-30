const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const SocialMediaType = new GraphQLObjectType({
  name: "SocialMedia",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    link: { type: GraphQLString },
    created_by: { type: GraphQLString },
    created_at: { type: GraphQLString }
  })
});

module.exports = SocialMediaType;
