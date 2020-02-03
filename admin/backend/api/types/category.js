const graphql = require("graphql");
const Post = require("../../models/Post");
const { GraphQLString, GraphQLObjectType, GraphQLList } = graphql;

const CategoryType = new GraphQLObjectType({
  name: "CategoryAPI",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    created_by: { type: GraphQLString },
    updated_by: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return Post.find({ category: parent.title });
      }
    }
  })
});

module.exports = CategoryType;

const PostType = require("../../schema/types/post");
