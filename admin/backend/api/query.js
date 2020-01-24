const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
const Post = require("../models/Post");
const Page = require("../models/Page");
const Member = require("../models/Member");
const Retailer = require("../models/Retailer");
const SocialMedia = require("../models/SocialMedia");

// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");
const PostType = require("./types/post");
const PageType = require("./types/page");
const MemberType = require("./types/member");
const RetailerType = require("./types/retailer");
const SocialMediaType = require("./types/socialMedia");

const RootQuery = new GraphQLObjectType({
  name: "APIQueryType",
  fields: {
    // ===== Get Posts  =====
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return Post.find();
      }
    },

    // ===== Get Pages  =====
    pages: {
      type: new GraphQLList(PageType),
      resolve: (parent, args) => {
        return Page.find();
      }
    },

    // ===== Get Member  =====
    members: {
      type: new GraphQLList(MemberType),
      resolve: (parent, args) => {
        return Member.find();
      }
    },

    // ===== Get Retailers  =====
    retailers: {
      type: new GraphQLList(RetailerType),
      resolve: (parent, args) => {
        return Retailer.find();
      }
    }
  }
});

module.exports = RootQuery;
