const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLFloat,
} = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    purchasingType: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    created_at: { type: GraphQLString },
  }),
});

module.exports = ProductType;
