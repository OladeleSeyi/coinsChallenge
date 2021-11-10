import { server } from "../graphQlHandler";

const query = `{
    calculatePrice(type: buy, margin: 0, exchangeRate: 571)
  }
`;

test("gql Server", (done) => {
  const event = { body: JSON.stringify({ query }), httpMethod: "POST" };
  const context = "context";
  const callback = (error, response) => {
    try {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body).toBe("string");
      done();
    } catch (error) {
      done(error);
    }
  };

  server(event, context, callback);
});
