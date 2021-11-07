import axios from "axios";
// Get data from the api
export const retrieveData = async (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const validateMargin = (margin) => {
  // CHeck if the margin is greater than 1
  if (margin < 100) {
    console.log("less than");
    return margin;
  }

  // return the
  throw new Error("The margin should be greater than 0 and less than 1");
};

export const convertToNGN = (amount, rate) => {
  return rate * amount;
};
