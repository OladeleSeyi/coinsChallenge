import * as fs from "fs";
import { convertToNGN, retrieveData } from "./helperFunctions";
const schema = fs.readFileSync("../schema.graphql", "utf8");

export const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Query = {
  calcalculatePrice: async (_, { type, margin, exchangeRate }) => {
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
};

export default Query;
