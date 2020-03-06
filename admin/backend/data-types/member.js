const graphql = require("graphql");
const User = require("../models/User");
const { GraphQLString, GraphQLObjectType } = graphql;

const MemberType = new GraphQLObjectType({
  name: "Member",
  fields: () => ({
    id: { type: GraphQLString },
    fullname: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    created_by: { type: GraphQLString },
    position: { type: GraphQLString },
    photo: { type: GraphQLString },
    department: { type: GraphQLString },
    created_at: { type: GraphQLString },
    message: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findOne({ fullname: parent.created_by });
      }
    }
  })
});

module.exports = MemberType;

const UserType = require("./user");
