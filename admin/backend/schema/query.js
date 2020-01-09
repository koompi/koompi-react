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
  name: "RootQueryType",
  fields: {
    // ===== Get Users =====
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find();
      }
    },
    // ===== Get User by ID =====
    user: {
      type: UserType,
      args: {
        email: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return User.findOne({ email: args.email });
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
    // ===== Get Posts  =====
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
    },
    // ===== Get Pages  =====
    pages: {
      type: new GraphQLList(PageType),
      resolve: (parent, args) => {
        return Page.find();
      }
    },
    // ===== Get Page by ID  =====
    page: {
      type: PageType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return Page.findById({ _id: args.id });
      }
    },
    // ===== Get Member  =====
    members: {
      type: new GraphQLList(MemberType),
      resolve: (parent, args) => {
        return Member.find();
      }
    },
    // ===== Get Member by ID  =====
    member: {
      type: MemberType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return Member.findById({ _id: args.id });
      }
    },
    // ===== Get Retailers  =====
    retailers: {
      type: new GraphQLList(RetailerType),
      resolve: (parent, args) => {
        return Retailer.find();
      }
    },
    // ===== Get Retailer by ID  =====
    retailer: {
      type: RetailerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return Retailer.findById({ _id: args.id });
      }
    },
    // ===== Get Social Media  =====
    socialMedia: {
      type: new GraphQLList(SocialMediaType),
      resolve: (parent, args) => {
        return SocialMedia.find();
      }
    },
    // ===== Get Retailer by ID  =====
    oneSocialMedia: {
      type: SocialMediaType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return SocialMedia.findById({ _id: args.id });
      }
    }
  }
});

module.exports = RootQuery;
