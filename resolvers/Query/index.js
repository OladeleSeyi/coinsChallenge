import {
  convertToNGN,
  generateRawPrice,
  retrieveData,
  validateMargin,
} from "./helperFunctions";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Query = {
  calculatePrice: async (_, { type, margin, exchangeRate }) => {
    const {
      bpi: {
        USD: { rate_float: price },
      },
    } = await retrieveData(url);

    margin = validateMargin(margin);

    const rawPrice = generateRawPrice(type, margin, price);

    return convertToNGN(rawPrice, exchangeRate);
  },
};

export default Query;
