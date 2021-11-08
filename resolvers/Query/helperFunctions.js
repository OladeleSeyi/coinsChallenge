import axios from "axios";
// Get data from the api
export const retrieveData = async (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error("An error occured in the process", err);
    });
};

export const computeMarginPercentage = (margin) => {
  if (margin === undefined || typeof margin !== "number") {
    throw new Error("Wrong input data");
  }
  // get the percentage in decimal
  return margin / 100;
};

export const generateRawPrice = (requestType, margin, price) => {
  if (
    margin === undefined ||
    typeof margin !== "number" ||
    price === undefined ||
    typeof price !== "number"
  ) {
    throw new Error("Wrong input data");
  }

  if (requestType === "buy") return price + margin * price;

  if (requestType === "sell") return price - margin * price;

  // while this shouldn't happen,  if neither buy or sell throw an error and end the flow
  throw new Error("Invalid transaction request");
};

export const convertToNGN = (amount, rate) => {
  if (
    amount === undefined ||
    typeof amount !== "number" ||
    rate === undefined ||
    typeof rate !== "number"
  ) {
    throw new Error("Wrong input data");
  }
  return rate * amount;
};
