import {
  computeMarginPercentage,
  convertToNGN,
  generateRawPrice,
} from "./helperFunctions";
describe("Unit tests for Calculate Price helpers ", () => {
  test("compute Percentage", () => {
    expect(computeMarginPercentage(20)).toEqual(0.2);
    expect(() => computeMarginPercentage("20")).toThrow("Wrong input data");
  });

  test("compute margin to fail if called without a number ", () => {
    expect(() => computeMarginPercentage("20")).toThrow("Wrong input data");
  });

  test("generate (buy) raw Price", () => {
    expect(generateRawPrice("buy", 0.1, 1000)).toEqual(1100);
  });
  test("generate (sell) raw Price", () => {
    expect(generateRawPrice("sell", 0.1, 1000)).toEqual(900);
  });

  test(" Generate raw price fails if called without  margin as a number", () => {
    expect(() => generateRawPrice("sell", "0.1", 1000)).toThrow(
      "Wrong input data"
    );
  });

  test(" Generate raw price fails if called without  price as a number", () => {
    expect(() => generateRawPrice("sell", 0.1, "1000")).toThrow(
      "Wrong input data"
    );
  });

  test(" Generate raw price fails if called with a different stirng besides 'buy' or 'sell' ", () => {
    expect(() => generateRawPrice("Hey", 0.1, 1000)).toThrow(
      "Invalid transaction request"
    );
  });

  test("convertToNGN", () => {
    expect(convertToNGN(10, 10)).toEqual(100);
  });

  test("convertToNGN fails if either rate or amount is not a number", () => {
    expect(() => convertToNGN("10", 10)).toThrow("Wrong input data");
    expect(() => convertToNGN(10, "10")).toThrow("Wrong input data");
  });
});
