const graphql = require("graphql");

// ======== Models Section =========
const Payment = require("../models/Payment");

// ======== Type Section =========
const paymentType = require("../data-types/payment");

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLFloat
} = graphql;

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    // ===== Create Category =====
    create_payment: {
      type: paymentType,
      args: {
        firstname: { type: new GraphQLNonNull(GraphQLString) },
        lastname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        color: { type: new GraphQLNonNull(GraphQLString) },
        payBy: { type: new GraphQLNonNull(GraphQLString) },
        message: { type: GraphQLString },
        product: { type: new GraphQLList(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) }
      },
      resolve: async (parent, args) => {
        try {
          const payment = new Payment({ ...args });
          await payment.save();
          return { message: "The payment created successfully." };
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    }
  }
});

module.exports = RootMutation;
