const graphql = require("graphql");

// ======== Models Section =========
const Customer = require("../models/Customer");
const Preorder = require("../models/Preorder");
const Product = require("../models/Product");

// ======== Type Section =========
const customerType = require("../data-types/customer");
const preorderType = require("../data-types/preorder");
const productType = require("../data-types/product");

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
} = graphql;

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    // ===== Create Category =====
    create_customer: {
      type: customerType,
      args: {
        firstname: { type: new GraphQLNonNull(GraphQLString) },
        lastname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        products: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const customer = new Customer({ ...args });
          return await customer.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    preorder: {
      type: preorderType,
      args: {
        firstname: { type: new GraphQLNonNull(GraphQLString) },
        lastname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          const preorder = new Preorder({ ...args });
          await preorder.save();
          return { message: "Your order submitted successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
    addProduct: {
      type: productType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        orderType: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: async (parent, args) => {
        try {
          const product = new Product({ ...args });
          await product.save();
          return { message: "Your product added with successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    },
  },
});

module.exports = RootMutation;
