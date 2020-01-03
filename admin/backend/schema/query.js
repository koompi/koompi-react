const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

// ======== Models Section =========
const User = require("../models/User");

// ======== Type Section =========
const UserType = require("./types/user");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find();
      }
    }
  }
});

module.exports = RootQuery;
