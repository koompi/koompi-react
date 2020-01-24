const graphql = require("graphql");
const User = require("../../models/User");
const { GraphQLString, GraphQLObjectType } = graphql;

const SocialMediaType = new GraphQLObjectType({
  name: "SocialMedia",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    link: { type: GraphQLString },
    created_by: { type: GraphQLString },
    created_at: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      }
    }
  })
});

module.exports = SocialMediaType;

const UserType = require("./user");
