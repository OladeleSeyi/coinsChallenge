import { GraphQLServerLambda } from "graphql-yoga";
import Query from "./resolvers/Query";
import schema from "./schema";

const lambda = new GraphQLServerLambda({
  typeDefs: schema.schema,
  resolvers: {
    Query,
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
