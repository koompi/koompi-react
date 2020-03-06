const graphql = require("graphql");
const User = require("../models/User");
const { GraphQLString, GraphQLObjectType } = graphql;

const RetailerType = new GraphQLObjectType({
  name: "Retailer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    location: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
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

module.exports = RetailerType;

const UserType = require("./user");
