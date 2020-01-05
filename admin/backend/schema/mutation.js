const graphql = require("graphql");
const bcrypt = require("bcryptjs");

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");

// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");

const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

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
    },
    // ===== Create Category =====
    create_category: {
      type: CategoryType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        try {
          const category = new Category({ ...args });
          return category.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    },
    // ===== Create Category =====
    delete_category: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return Category.findOneAndDelete({ _id: args.id });
      }
    },
    // ===== Update Category =====
    update_category: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        updated_at: { type: new GraphQLNonNull(GraphQLString) },
        updated_by: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          await Category.findByIdAndUpdate({ _id: args.id }, { ...args });
          return Category.findById(args.id);
        } catch (error) {
          console.log(error);
          throw new Error("This category title is already exist...");
        }
      }
    }
  }
});

module.exports = RootMutation;
