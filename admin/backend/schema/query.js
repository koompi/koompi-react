const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

const RoleType = new GraphQLObjectType({
  name: "RoleQuery",
  fields: () => ({
    id: { type: GraphQLID },
    title: {
      type: GraphQLString
    }
  })
});

const roles = [
  {
    id: "1123123fhsdjfh",
    title: "Hello"
  },
  { id: "12317ajdhad", title: "Test" }
];

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    roles: {
      type: new GraphQLList(RoleType),
      resolve() {
        return roles;
      }
    }
  }
});

module.exports = RootQuery;
