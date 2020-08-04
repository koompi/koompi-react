const graphql = require("graphql");
const Product = require("../models/Product");
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
} = graphql;

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    payBy: { type: GraphQLString },
    products: { type: GraphQLString },
    message: { type: GraphQLString },
    created_at: { type: GraphQLString },
  }),
});

module.exports = CustomerType;
const ProductType = require("./product");
