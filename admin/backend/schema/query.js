const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
const Post = require("../models/Post");

// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");
const PostType = require("./types/post");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // ===== Get Users =====
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find();
      }
    },
    // ===== Get Categories =====
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: (parent, args) => {
        return Category.find();
      }
    },
    // ===== Get Category by ID =====
    category: {
      type: CategoryType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return Category.findById({ _id: args.id });
      }
    },
    // ===== Get Post  =====
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return Post.find();
      }
    },
    // ===== Get Post by ID  =====
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return Post.findById({ _id: args.id });
      }
    }
  }
});

module.exports = RootQuery;
