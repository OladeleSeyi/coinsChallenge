import Query from "../index";

describe("Tests Query Functions", () => {
  test("should (naively) test calculatePrice query", async (done) => {
    const vars = { type: "buy", margin: 10, exchangeRate: 300 };
    const mock = await Query.calculatePrice("_", vars);
    expect(mock).toEqual(expect.any(Number));
    done();
  });
});
