const graphql = require("graphql");
const User = require("../models/User");
const Category = require("../models/Category");
const Lang = require("../models/Languages");
const { GraphQLString, GraphQLObjectType, GraphQLList, GraphQLInt } = graphql;

const PageType = new GraphQLObjectType({
  name: "Page",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    lang: { type: GraphQLString },
    subTitle: { type: GraphQLString },
    created_by: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    category: { type: GraphQLString },
    sectionNumber: { type: GraphQLString },
    keywords: { type: new GraphQLList(GraphQLString) },
    meta_desc: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    updated_by: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      },
    },
    category: {
      type: CategoryType,
      resolve: (parent, args) => {
        return Category.findOne({ title: parent.category });
      },
    },
    lang: {
      type: LangType,
      resolve: (parent, args) => {
        return Lang.findOne({ lang: parent.lang });
      },
    },
  }),
});

module.exports = PageType;

const UserType = require("./user");
const LangType = require("./language");
const CategoryType = require("./category");
