const graphql = require("graphql");
const GraphQLJSON = require("graphql-type-json");
const User = require("../../models/User");
const Category = require("../../models/Category");
const { GraphQLString, GraphQLList, GraphQLObjectType } = graphql;

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    created_by: { type: GraphQLString },
    description: { type: GraphQLString },
    thumnail: { type: GraphQLString },
    category: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
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
      resolve: parent => {
        return Category.findOne({ title: parent.category });
      }
    }
  })
});

module.exports = PostType;

const UserType = require("../../schema/types/user");
const CategoryType = require("../../schema/types/category");
