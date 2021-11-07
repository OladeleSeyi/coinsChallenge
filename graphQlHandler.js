import * as fs from "fs";
import { GraphQLServerLambda } from "graphql-yoga";
import axios from "axios";

const schema = fs.readFileSync("./schema.graphql", "utf8");

const retrieveData = async (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const convertToNGN = (amount, rate) => {
  return rate * amount;
};

const lambda = new GraphQLServerLambda({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: (_, { name }) => `Hello ${name || "world"}`,
      calculatePrice: async (_, { type, margin, exchangeRate }) => {
        console.log("typw", type, margin, exchangeRate);
        const {
          bpi: {
            USD: { rate_float: price },
          },
        } = await retrieveData(url);
        if (type === "buy") {
          console.log("spread", margin * price, price);
          const buyPrice = price + margin * price;
          return convertToNGN(buyPrice, exchangeRate);
        }
        const sellPrice = price - margin * price;
        return convertToNGN(sellPrice, exchangeRate);
      },
    },
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
