const graphql = require("graphql");
const User = require("../models/User");
const { GraphQLString, GraphQLObjectType } = graphql;

const AMAType = new GraphQLObjectType({
  name: "AMA",
  fields: () => ({
    id: { type: GraphQLString },
    image: { type: GraphQLString },
    name: { type: GraphQLString },
    title: { type: GraphQLString },
    desc: { type: GraphQLString },
    category: { type: GraphQLString },
    url: { type: GraphQLString },
    date: { type: GraphQLString },
    message: { type: GraphQLString },
    created_by: { type: GraphQLString },
    created_at: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      },
    },
  }),
});

module.exports = AMAType;

const UserType = require("./user");
