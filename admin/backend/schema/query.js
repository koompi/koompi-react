const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find();
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: (parent, args) => {
        return Category.find();
      }
    },
    category: {
      type: CategoryType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return Category.findById({ _id: args.id });
      }
    }
  }
});

module.exports = RootQuery;
