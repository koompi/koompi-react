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
const Customer = require("../models/Customer");
const Software = require("../models/Software");
const Preorder = require("../models/Preorder");
const Product = require("../models/Product");
const Lang = require("../models/Languages");
const AMA = require("../models/AMA");

// ======== Type Section =========
const UserType = require("../data-types/user");
const CategoryType = require("../data-types/category");
const PostType = require("../data-types/post");
const PageType = require("../data-types/page");
const MemberType = require("../data-types/member");
const RetailerType = require("../data-types/retailer");
const SocialMediaType = require("../data-types/socialMedia");
const LegalType = require("../data-types/legal");
const CustomerType = require("../data-types/customer");
const SoftwareType = require("../data-types/software");
const PreorderType = require("../data-types/preorder");
const ProductType = require("../data-types/product");
const LangType = require("../data-types/language");

const AMAType = require("../data-types/ama");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // ===== Get Langs =====
    langs: {
      type: new GraphQLList(LangType),
      resolve: (parent, args) => {
        return Lang.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Users =====
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => {
        return User.find().sort({ created_at: -1 });
      },
    },
    // ===== Get User by ID =====
    user: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return User.findOne({ email: args.email });
      },
    },
    // ===== Get Products  =====
    product: {
      type: ProductType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Product.findOne({ _id: args.id });
      },
    },
    // ===== Get Categories =====
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: (parent, args) => {
        return Category.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Category by ID =====
    category: {
      type: CategoryType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Category.findById({ _id: args.id });
      },
    },
    // ===== Get Posts  =====
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return Post.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Posts  =====
    test: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        const result = 1580440796606;
        return Post.find({
          created_at: {
            $gte: new Date(new Date(result).setHours(00, 00, 00)),
            $lt: new Date(new Date(result).setHours(23, 59, 59)),
          },
        });
      },
    },
    // ===== Get Post by ID  =====
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Post.findById({ _id: args.id });
      },
    },
    // ===== Get Pages  =====
    pages: {
      type: new GraphQLList(PageType),
      resolve: (parent, args) => {
        return Page.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Page by ID  =====
    page: {
      type: PageType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Page.findById({ _id: args.id });
      },
    },
    // ===== Get Member  =====
    members: {
      type: new GraphQLList(MemberType),
      resolve: (parent, args) => {
        return Member.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Member by ID  =====
    member: {
      type: MemberType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Member.findById({ _id: args.id });
      },
    },
    // ===== Get Retailers  =====
    retailers: {
      type: new GraphQLList(RetailerType),
      resolve: (parent, args) => {
        return Retailer.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Retailer by ID  =====
    retailer: {
      type: RetailerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Retailer.findById({ _id: args.id });
      },
    },
    // ===== Get Social Media  =====
    socialMedia: {
      type: new GraphQLList(SocialMediaType),
      resolve: (parent, args) => {
        return SocialMedia.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Retailer by ID  =====
    oneSocialMedia: {
      type: SocialMediaType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return SocialMedia.findById({ _id: args.id });
      },
    },
    // ===== Get Legal by ID  =====
    legal: {
      type: LegalType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Legal.findById({ _id: args.id });
      },
    },
    // ===== Get Legals  =====
    legals: {
      type: new GraphQLList(LegalType),
      resolve: (parent, args) => {
        return Legal.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Customers  =====
    customers: {
      type: new GraphQLList(CustomerType),
      resolve: (parent, args) => {
        return Customer.find().sort({ created_at: -1 });
      },
    },
    // ===== Get Software  =====
    software: {
      type: SoftwareType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Software.findById({ _id: args.id });
      },
    },
    // ===== Get Softwares  =====
    softwares: {
      type: new GraphQLList(SoftwareType),
      resolve: (parent, args) => {
        return Software.find().sort({ created_at: -1 });
      },
    },
    // ===== Get PreOrder  =====
    preorders: {
      type: new GraphQLList(PreorderType),
      resolve: (parent, args) => {
        return Preorder.find().sort({ created_at: -1 });
      },
    },
    // ===== Get PreOrder  =====
    amas: {
      type: new GraphQLList(AMAType),
      resolve: (parent, args) => {
        return AMA.find().sort({ created_at: -1 });
      },
    },
    ama: {
      type: AMAType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return AMA.findById({ _id: args.id });
      },
    },
  },
});

module.exports = RootQuery;
