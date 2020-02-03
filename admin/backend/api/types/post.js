const graphql = require("graphql");
const Category = require("../../models/Category");
const { GraphQLString, GraphQLList, GraphQLObjectType } = graphql;

const PostType = new GraphQLObjectType({
  name: "PostAPI",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
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
    category: {
      type: CategoryType,
      resolve: parent => {
        return Category.findOne({ title: parent.category });
      }
    }
  })
});

module.exports = PostType;
const CategoryType = require("../../schema/types/category");
