const graphql = require("graphql");
const bcrypt = require("bcryptjs");

// ======== Models Section =========
const User = require("../models/User");

// ======== Type Section =========
const UserType = require("./types/user");

const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = graphql;

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    // ===== Create User =====
    create_user: {
      type: UserType,
      args: {
        fullname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          // Check Email
          const isEmail = await User.findOne({ email: args.email });
          if (isEmail) {
            throw new Error("This email already exist...");
          }
          // Hash the password
          const saltRounds = 10;
          const hashPassword = await bcrypt.hash(args.password, saltRounds);
          const user = new User({ ...args, password: hashPassword });
          return user.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    }
  }
});

module.exports = RootMutation;
