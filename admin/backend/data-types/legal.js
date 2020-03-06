const graphql = require("graphql");
const User = require("../models/User");
const { GraphQLString, GraphQLObjectType } = graphql;

const LegalType = new GraphQLObjectType({
  name: "Legal",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    created_by: { type: GraphQLString },
    updated_by: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      }
    }
  })
});

module.exports = LegalType;

const UserType = require("./user");
