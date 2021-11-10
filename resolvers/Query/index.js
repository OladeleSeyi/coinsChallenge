import {
  computeMarginPercentage,
  convertToNGN,
  generateRawPrice,
  retrieveData,
} from "./helperFunctions";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Query = {
  calculatePrice: async (_, { type, margin, exchangeRate }) => {
    const {
      bpi: {
        USD: { rate_float: price },
      },
    } = await retrieveData(url);

    margin = computeMarginPercentage(margin);

    const rawPrice = generateRawPrice(type, margin, price);
    return convertToNGN(rawPrice, exchangeRate);
  },
};

export default Query;
