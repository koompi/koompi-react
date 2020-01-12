const graphql = require("graphql");
const Post = require("../../models/Post");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    avatar: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    isAdmin: { type: GraphQLBoolean },
    created_at: { type: GraphQLString },
    posts: {
      type: PostType,
      resolve: (parent, args) => {
        return Post.findOne({ created_by: parent.fullname });
      }
    }
  })
});

module.exports = UserType;

const PostType = require("../../schema/types/post");
