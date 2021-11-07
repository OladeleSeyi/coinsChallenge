import { convertToNGN, retrieveData, validateMargin } from "./helperFunctions";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Query = {
  calculatePrice: async (_, { type, margin, exchangeRate }) => {
    const {
      bpi: {
        USD: { rate_float: price },
      },
    } = await retrieveData(url);

    margin = validateMargin(margin);
    if (type === "buy") {
      const buyPrice = price + margin * price;
      return convertToNGN(buyPrice, exchangeRate);
    }
    const sellPrice = price - margin * price;
    return convertToNGN(sellPrice, exchangeRate);
  },
};

export default Query;
