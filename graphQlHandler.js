import * as fs from "fs";
import { GraphQLServerLambda } from "graphql-yoga";

const schema = fs.readFileSync("./schema.graphql", "utf8");

const lambda = new GraphQLServerLambda({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: (_, { name }) => `Hello ${name || "world"}`,
    },
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
