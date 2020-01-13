const graphql = require("graphql");
const bcrypt = require("bcryptjs");

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
const Post = require("../models/Post");
const Page = require("../models/Page");
const Member = require("../models/Member");
const Retailer = require("../models/Retailer");
const SocialMedia = require("../models/SocialMedia");

// ======== Type Section =========
const UserType = require("./types/user");
const CategoryType = require("./types/category");
const PostType = require("./types/post");
const PageType = require("./types/page");
const MemberType = require("./types/member");
const RetailerType = require("./types/retailer");
const SocialMediaType = require("./types/socialMedia");

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
    // ===== Create User =====
    update_user: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        fullname: { type: new GraphQLNonNull(GraphQLString) },
        avatar: { type: new GraphQLNonNull(GraphQLString) },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
      },
      resolve: async (parent, args) => {
        try {
          const user = await User.findOne({ email: args.email });
          const { email, fullname, avatar, oldPassword, newPassword } = args;
          if (
            oldPassword === "" ||
            oldPassword === null ||
            oldPassword === undefined
          ) {
            await User.updateMany({ email }, { fullname, avatar });
            return User.findOne({ email });
          }
          const isPassword = bcrypt.compareSync(oldPassword, user.password);
          if (isPassword) {
            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(newPassword, saltRounds);
            await User.updateMany(
              { email },
              { fullname, avatar, password: hashPassword }
            );
            return User.findOne({ email });
          } else {
            throw "Password is invalid";
          }
        } catch (error) {
          throw new Error(error);
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
      resolve: async (parent, args) => {
        return User.findOne({ _id: args.id }, async (err, data) => {
          if (!err) {
            await Post.findOneAndDelete({ created_by: data.fullname });
            await Page.findOneAndDelete({ created_by: data.fullname });
            await Category.findOneAndDelete({ created_by: data.fullname });
            await Member.findOneAndDelete({ created_by: data.fullname });
            await Retailer.findOneAndDelete({ created_by: data.fullname });
            await SocialMedia.findOneAndDelete({ created_by: data.fullname });
            return User.findOneAndDelete({ _id: args.id });
          } else {
            console.log(err);
          }
        });
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
    },
    // ===== Add Social Media =====
    add_social_media: {
      type: SocialMediaType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        try {
          const socialMedia = new SocialMedia({ ...args });
          return socialMedia.save();
        } catch (error) {
          console.log(error);
        }
      }
    },
    // ===== Delete Social Media =====
    delete_social_media: {
      type: SocialMediaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        return SocialMedia.findOneAndDelete({ _id: args.id });
      }
    },
    // ===== Add Retailer =====
    update_social_media: {
      type: SocialMediaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        try {
          await SocialMedia.updateOne({ _id: args.id }, { ...args });
          return SocialMedia.findById(args.id);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
});

module.exports = RootMutation;
