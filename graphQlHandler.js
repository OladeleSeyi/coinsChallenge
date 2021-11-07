import { GraphQLServerLambda } from "graphql-yoga";
import Query from "./resolvers/Query";

const lambda = new GraphQLServerLambda({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: (_, { name }) => `Hello ${name || "world"}`,
      ...Query,
    },
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
