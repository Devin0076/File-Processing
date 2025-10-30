const {
  sumNumbers,
  minMaxNumbers,
  averageNumbers
} = require("../src/numberProcessor");

describe("numberProcessor", () => {
  test("sumNumbers handles positives, negatives, and empty", () => {
    expect(sumNumbers([1, 2, 3])).toBe(6);
    expect(sumNumbers([10, -4, 2])).toBe(8);
    expect(sumNumbers([])).toBe(0);
  });

  test("minMaxNumbers finds min/max; handles empty", () => {
    expect(minMaxNumbers([5, 2, 9, -1, 9])).toEqual({ min: -1, max: 9 });
    expect(minMaxNumbers([])).toEqual({ min: null, max: null });
  });

  test("averageNumbers computes mean; handles single and empty", () => {
    expect(averageNumbers([2, 4, 6])).toBeCloseTo(4);
    expect(averageNumbers([1])).toBe(1);
    expect(averageNumbers([])).toBeNull();
  });

  test("averageNumbers is numerically stable enough for common cases", () => {
    expect(averageNumbers([0.1, 0.2, 0.3])).toBeCloseTo(0.2, 10);
  });
});
