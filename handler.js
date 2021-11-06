/* eslint-disable no-unused-vars */
import * as fs from "fs";

export const hello = async (event, context) => {
  const schema = fs.readFileSync("./schema.graphql", "utf8");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${await message({
        time: 1,
        copy: "Your function executed successfully!",
      })}`,
    }),
  };
};

const message = ({ time, ...rest }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(`${rest.copy} (with a delay)`);
    }, time * 1000)
  );
