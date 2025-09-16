import { getStatistics } from "./utils";

describe("utils", () => {
  describe("getStatistics", () => {
    const sorted = [1, 2, 3, 4, 5, 6];
    it("should return minimum", () => {
      const { minimum } = getStatistics(sorted);
      expect(minimum).toBe(sorted[0]);
    });
  });
});
