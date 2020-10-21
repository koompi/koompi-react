const graphql = require("graphql");
const User = require("../models/User");
const Lang = require("../models/Languages");
const { GraphQLString, GraphQLObjectType } = graphql;

const SocialMediaType = new GraphQLObjectType({
  name: "SocialMedia",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    lang: { type: GraphQLString },
    link: { type: GraphQLString },
    created_by: { type: GraphQLString },
    created_at: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      },
    },
    lang: {
      type: LangType,
      resolve: (parent, args) => {
        return Lang.findOne({ lang: parent.lang });
      },
    },
  }),
});

module.exports = SocialMediaType;

const UserType = require("./user");
const LangType = require("./language");
