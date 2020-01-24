const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const RootQuery = require("./query");
// const RootMutation = require("./mutation");

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation: RootMutation
});
