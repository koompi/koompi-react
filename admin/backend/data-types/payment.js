const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList
} = graphql;

const PaymentType = new GraphQLObjectType({
  name: "Payment",
  fields: () => ({
    id: { type: GraphQLString },
    fname: { type: GraphQLString },
    lname: { type: GraphQLString },
    email: { type: GraphQLString },
    message: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    message: { type: GraphQLString },
    product: { type: new GraphQLList(GraphQLString) },
    cancle: { type: GraphQLBoolean },
    price: { type: GraphQLFloat },
    created_at: { type: GraphQLString }
  })
});

module.exports = PaymentType;
