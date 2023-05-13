const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    codeimprove: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        let data = [
          {
            id: 1,
            name: "codeimprove",
            email: "code@gmail.com",
            phone: 1234567890,
          },
          { 
            id: 2,
            name: "tapan",
            email: "tapan@gmail.com",
            phone: 1234557890,
          },
          {
            id: 3,
            name: "7shap",
            email: "7span@gmail.com",
            phone: 1234568890,
          },
        ];
        return data
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
