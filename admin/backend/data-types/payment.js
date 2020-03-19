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
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    message: { type: GraphQLString },
    phone: { type: GraphQLString },
    color: { type: GraphQLString },
    payBy: { type: GraphQLString },
    message: { type: GraphQLString },
    product: { type: new GraphQLList(GraphQLString) },
    cancle: { type: GraphQLBoolean },
    price: { type: GraphQLFloat },
    created_at: { type: GraphQLString }
  })
});

module.exports = PaymentType;
