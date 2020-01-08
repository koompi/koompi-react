const graphql = require("graphql");
const bcrypt = require("bcryptjs");

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
const Post = require("../models/Post");
const Page = require("../models/Page");
const Member = require("../models/Member");
const Retailer = require("../models/Retailer");

// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");
const PostType = require("./types/post");
const PageType = require("./types/page");
const MemberType = require("./types/member");
const RetailerType = require("./types/retailer");

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt
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
    },
    // ===== Create Page =====
    create_page: {
      type: PageType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        subTitle: { type: GraphQLString },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        try {
          const page = new Page({ ...args });
          return page.save();
        } catch (error) {
          console.log(error);
        }
      }
    },
    // ===== Delete Page =====
    delete_page: {
      type: PageType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return Page.findOneAndDelete({ _id: args.id });
      }
    },
    // ===== Update Page =====
    update_page: {
      type: PageType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        subTitle: { type: GraphQLString },
        description: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) },
        updated_at: { type: new GraphQLNonNull(GraphQLString) },
        updated_by: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          await Page.updateOne({ _id: args.id }, { ...args });
          return Page.findById(args.id);
        } catch (error) {
          console.log(error);
        }
      }
    },
    // ===== Create Page =====
    add_member: {
      type: MemberType,
      args: {
        fullname: { type: new GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLString },
        email: { type: GraphQLString },
        created_by: { type: GraphQLString },
        position: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        department: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        try {
          const member = new Member({ ...args });
          return member.save();
        } catch (error) {
          console.log(error);
        }
      }
    },
    // ===== Delete Page =====
    delete_member: {
      type: MemberType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return Member.findOneAndDelete({ _id: args.id });
      }
    },
    // ===== Update Page =====
    update_member: {
      type: MemberType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        fullname: { type: new GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLString },
        email: { type: GraphQLString },
        created_by: { type: GraphQLString },
        position: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: new GraphQLNonNull(GraphQLString) },
        department: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          await Member.updateOne({ _id: args.id }, { ...args });
          return Member.findById(args.id);
        } catch (error) {
          console.log(error);
        }
      }
    },
    // ===== Add Retailer =====
    add_retailer: {
      type: RetailerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        logo: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        try {
          const retailer = new Retailer({ ...args });
          return retailer.save();
        } catch (error) {
          console.log(error);
        }
      }
    },
    // ===== Delete Page =====
    delete_retailer: {
      type: RetailerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return Retailer.findOneAndDelete({ _id: args.id });
      }
    },
    // ===== Add Retailer =====
    update_retailer: {
      type: RetailerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        logo: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          await Retailer.updateOne({ _id: args.id }, { ...args });
          return Retailer.findById(args.id);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
});

module.exports = RootMutation;
