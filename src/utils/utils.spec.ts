import {
  getSortedAscending,
  getStatistics,
  getWithNDecimalPlaces,
} from "./utils";

describe("utils", () => {
  const valuesSorted = [1, 2, 3, 4];
  const valuesNotSorted = [3, 1, 2, 4];

  describe("getStatistics", () => {
    it("should return minimum", () => {
      const { minimum } = getStatistics(valuesSorted);
      expect(minimum).toBe(valuesSorted[0]);
    });

    it("should return maximum", () => {
      const { maximum } = getStatistics(valuesSorted);
      expect(maximum).toBe(valuesSorted[valuesSorted.length - 1]);
    });

    it("should return average", () => {
      const { average } = getStatistics(valuesSorted);
      const avg =
        (valuesSorted[0] +
          valuesSorted[1] +
          valuesSorted[2] +
          valuesSorted[3]) /
        valuesSorted.length;
      expect(average).toBe(avg);
    });

    it("should return values joined with a comma", () => {
      const { sorted } = getStatistics(valuesSorted);
      const joined = `${valuesSorted[0]}, ${valuesSorted[1]}, ${valuesSorted[2]}, ${valuesSorted[3]}`;
      expect(sorted).toBe(joined);
    });

    it("should return median", () => {
      const { median } = getStatistics(valuesSorted);
      expect(median).toBe((valuesSorted[1] + valuesSorted[2]) / 2);
    });

    it("should return number of elements", () => {
      const { numberOfElements } = getStatistics(valuesSorted);
      expect(numberOfElements).toBe(valuesSorted.length);
    });
  });

  describe("getSortedAscending", () => {
    it("should sort ascending", () => {
      const sorted = getSortedAscending(valuesNotSorted);
      expect(sorted).toStrictEqual(valuesSorted);
    });
  });

  describe("getWithNDecimalPlaces", () => {
    it("should get value with n decimal places", () => {
      const value = 3.12345;
      expect(getWithNDecimalPlaces(value, 1)).toBe("3.1");
      expect(getWithNDecimalPlaces(value, 2)).toBe("3.12");
      expect(getWithNDecimalPlaces(value, 3)).toBe("3.123");
      expect(getWithNDecimalPlaces(value, 4)).toBe("3.1235"); // rounds up
      expect(getWithNDecimalPlaces(value, 5)).toBe("3.12345");
    });
  });
});
