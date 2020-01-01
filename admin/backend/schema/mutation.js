const graphql = require("graphql");

const roles = [{}];

const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = graphql;

const RoleType = new GraphQLObjectType({
  name: "RoleMutation",
  fields: () => ({
    title: {
      type: GraphQLString
    }
  })
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    role: {
      type: RoleType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(args) {
        const role = roles.push(args.title);
        console.log(role);
        return role;
      }
    }
  }
});

module.exports = RootMutation;
