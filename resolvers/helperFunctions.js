export const retrieveData = async (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const convertToNGN = (amount, rate) => {
  return rate * amount;
};
