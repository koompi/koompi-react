const graphql = require("graphql");
const bcrypt = require("bcryptjs");

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
const Post = require("../models/Post");

// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");
const PostType = require("./types/post");

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} = graphql;

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
    // ===== Update Use =====
    approve_user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        approve: { type: new GraphQLNonNull(GraphQLBoolean) }
      },
      resolve: async (parent, args) => {
        try {
          await User.updateOne({ _id: args.id }, { approved: args.approve });
          return User.findById({ _id: args.id });
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      }
    },
    // ===== Make user as Admin =====
    isAdmin: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: new GraphQLNonNull(GraphQLBoolean) }
      },
      resolve: async (parent, args) => {
        try {
          await User.updateOne({ _id: args.id }, { isAdmin: args.isAdmin });
          return User.findById({ _id: args.id });
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      }
    },
    // ===== Delete Use =====
    delete_user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return User.findOneAndDelete({ _id: args.id });
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
          await Category.updateOne({ _id: args.id }, { ...args });
          return Category.findById(args.id);
        } catch (error) {
          console.log(error);
          throw new Error("This category title is already exist...");
        }
      }
    },
    // ===== Create Post =====
    create_post: {
      type: PostType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        thumnail: { type: GraphQLString },
        category: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        try {
          const post = new Post({ ...args });
          return post.save();
        } catch (error) {
          console.log(error);
        }
      }
    },
    delete_post: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return Post.findOneAndDelete({ _id: args.id });
      }
    },
    // ===== Update Category =====
    update_post: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        updated_by: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        thumnail: { type: GraphQLString },
        category: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) },
        updated_at: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          await Post.updateOne({ _id: args.id }, { ...args });
          return Post.findById(args.id);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
});

module.exports = RootMutation;
