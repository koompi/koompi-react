const graphql = require("graphql");
const User = require("../models/User");
const { GraphQLString, GraphQLObjectType } = graphql;

const SoftwareType = new GraphQLObjectType({
  name: "Software",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    logo: { type: GraphQLString },
    image: { type: GraphQLString },
    created_by: { type: GraphQLString },
    created_at: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      }
    }
  })
});

module.exports = SoftwareType;

const UserType = require("./user");
