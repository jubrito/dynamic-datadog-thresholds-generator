import { getStatistics } from "./utils";

describe("utils", () => {
  describe("getStatistics", () => {
    const sorted = [1, 2, 3];

    it("should return minimum", () => {
      const { minimum } = getStatistics(sorted);
      expect(minimum).toBe(sorted[0]);
    });

    it("should return maximum", () => {
      const { maximum } = getStatistics(sorted);
      expect(maximum).toBe(sorted[sorted.length - 1]);
    });

    it("should return average", () => {
      const { average } = getStatistics(sorted);
      const avg = (sorted[0] + sorted[1] + sorted[2]) / sorted.length;
      expect(average).toBe(avg);
    });
  });
});
