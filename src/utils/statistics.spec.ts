import {
  getAverage,
  getMedian,
  getInterpolatedPercentile,
  getQ1,
  getQ3,
  getIQR,
  filterExtremeValues,
  isDataSufficient,
} from "./statistics";

describe("statistics", () => {
  const sorted = [1, 2, 3, 4, 5];
  const evenSorted = [1, 2, 3, 4];
  const withOutliers = [1, 2, 3, 4, 5, 100];

  describe("getAverage", () => {
    it("returns the average", () => {
      expect(getAverage(sorted)).toBe(3);
    });

    it("returns NaN for empty array", () => {
      expect(getAverage([])).toBeNaN();
    });
  });

  describe("getMedian", () => {
    it("returns the median for odd length", () => {
      expect(getMedian(sorted)).toBe(3);
    });
    it("returns the median for even length", () => {
      expect(getMedian(evenSorted)).toBe(2.5);
    });
    it("returns the value for single element", () => {
      expect(getMedian([7])).toBe(7);
    });

    it("returns NaN for empty array", () => {
      expect(getMedian([])).toBeNaN();
    });
  });

  describe("getInterpolatedPercentile", () => {
    it("returns 0 for empty or too small array", () => {
      expect(getInterpolatedPercentile(50, [])).toBe(0);
      expect(getInterpolatedPercentile(50, [1])).toBe(0);
    });
    it("returns the correct percentile for integer rank", () => {
      expect(getInterpolatedPercentile(0, sorted)).toBe(0);
      expect(getInterpolatedPercentile(50, sorted)).toBe(3);
      expect(getInterpolatedPercentile(100, sorted)).toBe(5);
    });
    it("returns interpolated value for non-integer rank", () => {
      expect(getInterpolatedPercentile(25, sorted)).toBeCloseTo(2);
      expect(getInterpolatedPercentile(75, sorted)).toBeCloseTo(4);
    });

    it("returns 0 for percentileN < 1", () => {
      expect(getInterpolatedPercentile(0, [1, 2, 3])).toBe(0);
      expect(getInterpolatedPercentile(-10, [1, 2, 3])).toBe(0);
    });
  });

  describe("getQ1 and getQ3", () => {
    it("returns Q1 and Q3", () => {
      expect(getQ1(sorted)).toBeCloseTo(2);
      expect(getQ3(sorted)).toBeCloseTo(4);
    });
    it("returns 0 for empty or too small array", () => {
      expect(getQ1([])).toBe(0);
      expect(getQ3([])).toBe(0);
    });
  });

  describe("getIQR", () => {
    it("returns the IQR", () => {
      expect(getIQR(sorted)).toBeCloseTo(2);
    });
    it("returns zero if Q1 or Q3 is undefined", () => {
      expect(getIQR([])).toBe(0);
    });

    it("returns 0 if all values are the same", () => {
      expect(getIQR([2, 2, 2, 2])).toBe(0);
    });
  });

  describe("filterExtremeValues", () => {
    it("removes outliers", () => {
      expect(filterExtremeValues(withOutliers)).toEqual([1, 2, 3, 4, 5]);
    });
    it("returns empty array if IQR is null", () => {
      expect(filterExtremeValues([])).toEqual([]);
    });

    it("returns original array if no outliers", () => {
      expect(filterExtremeValues([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("isDataSufficient", () => {
    it("returns false if array length is less than insufficientDataValue", () => {
      expect(isDataSufficient(0)).toBe(false);
      expect(isDataSufficient(1)).toBe(false);
      expect(isDataSufficient(2)).toBe(false);
      expect(isDataSufficient(3)).toBe(false);
      expect(isDataSufficient(4)).toBe(false);
    });

    it("returns false if array length is equal to or greater than insufficientDataValue", () => {
      expect(isDataSufficient(5)).toBe(true);
      expect(isDataSufficient(10)).toBe(true);
      expect(isDataSufficient(101)).toBe(true);
    });
  });
});
