const graphql = require("graphql");
const User = require("../../models/User");
const Category = require("../../models/Category");
const { GraphQLString, GraphQLObjectType, GraphQLList, GraphQLInt } = graphql;

const PageType = new GraphQLObjectType({
  name: "Page",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
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
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      }
    },
    category: {
      type: CategoryType,
      resolve: (parent, args) => {
        return Category.findOne({ title: parent.category });
      }
    }
  })
});

module.exports = PageType;

const UserType = require("../../schema/types/user");
const CategoryType = require("../../schema/types/category");
