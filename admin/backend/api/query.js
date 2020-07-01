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
const Legal = require("../models/Legal");
const Software = require("../models/Software");
const Product = require("../models/Product");

// ======== Type Section =========
const UserType = require("../data-types/user");
const CategoryType = require("../data-types/category");
const PostType = require("../data-types/post");
const PageType = require("../data-types/page");
const MemberType = require("../data-types/member");
const RetailerType = require("../data-types/retailer");
const SocialMediaType = require("../data-types/socialMedia");
const LegalType = require("../data-types/legal");
const SoftwareType = require("../data-types/software");
const ProductType = require("../data-types/product");

const RootQuery = new GraphQLObjectType({
  name: "APIQueryType",
  fields: {
    // ===== Get Posts  =====
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return Post.find();
      },
    },

    // ===== Get Products  =====
    products: {
      type: new GraphQLList(ProductType),
      resolve: (parent, args) => {
        return Product.find();
      },
    },

    // ===== Get Pages  =====
    pages: {
      type: new GraphQLList(PageType),
      args: {
        lang: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Page.find({ lang: args.lang }).sort({ created_at: -1 });
      },
    },

    // ===== Get Posts  =====
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return Post.find().sort({ created_at: -1 });
      },
    },

    // ===== Get Post  =====
    post: {
      type: PostType,
      args: {
        slug: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Post.findOne({ slug: args.slug });
      },
    },

    // ===== Get Post  =====
    postSearch: {
      type: new GraphQLList(PostType),
      args: {
        query: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Post.find({ category: { $regex: args.query, $options: "i" } });
      },
    },

    // ===== Get Member  =====
    members: {
      type: new GraphQLList(MemberType),
      resolve: (parent, args) => {
        return Member.find();
      },
    },

    // ===== Get Retailers  =====
    retailers: {
      type: new GraphQLList(RetailerType),
      resolve: (parent, args) => {
        return Retailer.find();
      },
    },
    // ===== Get Socail Media  =====
    socailMedia: {
      type: new GraphQLList(SocialMediaType),
      args: {
        lang: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return SocialMedia.find({ lang: args.lang });
      },
    },
    // ===== Get Category  =====
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: (parent, args) => {
        return Category.find();
      },
    },
    // ===== Get Legals  =====
    legals: {
      type: new GraphQLList(LegalType),
      resolve: (parent, args) => {
        return Legal.find();
      },
    },
    // ===== Get Legals  =====
    softwares: {
      type: new GraphQLList(SoftwareType),
      resolve: (parent, args) => {
        return Software.find();
      },
    },
  },
});

module.exports = RootQuery;
