const graphql = require("graphql");
const bcrypt = require("bcryptjs");
const GraphQLJSON = require("graphql-type-json");

// ======== Models Section =========
const User = require("../models/User");
const Category = require("../models/Category");
const Post = require("../models/Post");
const Page = require("../models/Page");
const Member = require("../models/Member");
const Retailer = require("../models/Retailer");
const SocialMedia = require("../models/SocialMedia");
const Legal = require("../models/Legal");
const Software = require("../models/Software");
const Customer = require("../models/Customer");
const Lang = require("../models/Languages");

// ======== Type Section =========
const UserType = require("../data-types/user");
const CategoryType = require("../data-types/category");
const PostType = require("../data-types/post");
const PageType = require("../data-types/page");
const MemberType = require("../data-types/member");
const RetailerType = require("../data-types/retailer");
const SocialMediaType = require("../data-types/socialMedia");
const LegalType = require("../data-types/legal");
const SoftwareType = require("../data-types/software");
const CustomerType = require("../data-types/customer");
const LangType = require("../data-types/language");

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} = graphql;

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    // ===== Create Lang =====
    create_lang: {
      type: LangType,
      args: {
        lang: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const lang = new Lang({ ...args });
          return lang.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    // ===== Create User =====
    create_user: {
      type: UserType,
      args: {
        fullname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
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
      },
    },
    // ===== Create User =====
    update_user: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        fullname: { type: new GraphQLNonNull(GraphQLString) },
        avatar: { type: new GraphQLNonNull(GraphQLString) },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
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
      },
    },
    // ===== Update Use =====
    approve_user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        approve: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: async (parent, args) => {
        try {
          await User.updateOne({ _id: args.id }, { approved: args.approve });
          return User.findById({ _id: args.id });
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      },
    },
    // ===== Make user as Admin =====
    isAdmin: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: async (parent, args) => {
        try {
          await User.updateOne({ _id: args.id }, { isAdmin: args.isAdmin });
          return User.findById({ _id: args.id });
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      },
    },
    // ===== Delete Use =====
    delete_user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
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
      },
    },

    // ===== Create Category =====
    create_category: {
      type: CategoryType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        slug: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        try {
          const category = new Category({ ...args });
          return category.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    // ===== Create Category =====
    delete_category: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return Category.findOneAndDelete({ _id: args.id });
      },
    },
    // ===== Update Category =====
    update_category: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        slug: { type: new GraphQLNonNull(GraphQLString) },
        updated_at: { type: new GraphQLNonNull(GraphQLString) },
        updated_by: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Category.updateOne({ _id: args.id }, { ...args });
          return Category.findById(args.id);
        } catch (error) {
          console.log(error);
          throw new Error("This category title is already exist...");
        }
      },
    },
    // ===== Create Post =====
    create_post: {
      type: PostType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        slug: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        thumnail: { type: GraphQLString },
        category: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const post = new Post({ ...args });
          await post.save();
          return { message: "The post created successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    delete_post: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Post.findOneAndDelete({ _id: args.id });
        return { message: "The post deleted successfully." };
      },
    },
    // ===== Update Category =====
    update_post: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        slug: { type: new GraphQLNonNull(GraphQLString) },
        updated_by: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        thumnail: { type: GraphQLString },
        category: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) },
        updated_at: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Post.updateOne({ _id: args.id }, { ...args });
          return { message: "The post updated successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Create Page =====
    create_page: {
      type: PageType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        lang: { type: new GraphQLNonNull(GraphQLString) },
        subTitle: { type: GraphQLString },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        category: { type: new GraphQLNonNull(GraphQLString) },
        sectionNumber: { type: GraphQLString },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const page = new Page({ ...args });
          await page.save();
          return { message: "The Page created successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Delete Page =====
    delete_page: {
      type: PageType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Page.findOneAndDelete({ _id: args.id });
        return { message: "The Page deleted successfully." };
      },
    },
    // ===== Update Page =====
    update_page: {
      type: PageType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        subTitle: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        category: { type: new GraphQLNonNull(GraphQLString) },
        sectionNumber: { type: new GraphQLNonNull(GraphQLString) },
        keywords: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        meta_desc: { type: new GraphQLNonNull(GraphQLString) },
        updated_at: { type: new GraphQLNonNull(GraphQLString) },
        updated_by: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Page.updateOne({ _id: args.id }, { ...args });
          return { message: "The Page updated successfully." };
        } catch (error) {
          console.log(error);
        }
      },
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
        department: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const member = new Member({ ...args });
          await member.save();
          return { message: "The memeber added successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Delete Page =====
    delete_member: {
      type: MemberType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Member.findOneAndDelete({ _id: args.id });
        return { message: "The memeber deleted successfully." };
      },
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
        department: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Member.updateOne({ _id: args.id }, { ...args });
          return { message: "The memeber updated successfully." };
        } catch (error) {
          console.log(error);
        }
      },
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
        created_by: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const retailer = new Retailer({ ...args });
          await retailer.save();
          return { message: "The retailer added successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Delete Page =====
    delete_retailer: {
      type: RetailerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Retailer.findOneAndDelete({ _id: args.id });
        return { message: "The retailer deleted successfully." };
      },
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
        logo: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Retailer.updateOne({ _id: args.id }, { ...args });
          return { message: "The retailer updated successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Add Social Media =====
    add_social_media: {
      type: SocialMediaType,
      args: {
        name: { type: GraphQLString },
        link: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const socialMedia = new SocialMedia({ ...args });
          await socialMedia.save();
          return { message: "The social media created successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Delete Social Media =====
    delete_social_media: {
      type: SocialMediaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await SocialMedia.findOneAndDelete({ _id: args.id });
        return { message: "The social media deleted successfully." };
      },
    },
    // ===== Add Retailer =====
    update_social_media: {
      type: SocialMediaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await SocialMedia.updateOne({ _id: args.id }, { ...args });
          return { message: "The social media updated successfully." };
        } catch (error) {
          console.log(error);
        }
      },
    },
    // ===== Create Legal =====
    create_legal: {
      type: LegalType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const legal = new Legal({ ...args });
          await legal.save();
          return { message: "The legal created successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    // ===== Edit Legal =====
    edit_legal: {
      type: LegalType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Legal.updateOne({ _id: args.id }, { ...args });
          return { message: "The legal updated successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    // ===== Delete Legal =====
    delete_legal: {
      type: LegalType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Legal.findOneAndDelete({ _id: args.id });
        return { message: "The legal deleted successfully." };
      },
    },
    // ===== Create Legal =====
    create_software: {
      type: SoftwareType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        created_by: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const software = new Software({ ...args });
          await software.save();
          return { message: "The software created successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    // ===== Edit Software =====
    edit_software: {
      type: SoftwareType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          await Software.updateOne({ _id: args.id }, { ...args });
          return { message: "The software updated successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    // ===== Delete Software =====
    delete_software: {
      type: SoftwareType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Software.findOneAndDelete({ _id: args.id });
        return { message: "The software deleted successfully." };
      },
    },
    // ===== Delete Software =====
    delete_customer: {
      type: CustomerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        await Customer.findOneAndDelete({ _id: args.id });
        return { message: "The customer deleted successfully." };
      },
    },
  },
});

module.exports = RootMutation;
