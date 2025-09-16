import { getStatistics } from "./utils";

describe("utils", () => {
  describe("getStatistics", () => {
    const values = [1, 2, 3];

    it("should return minimum", () => {
      const { minimum } = getStatistics(values);
      expect(minimum).toBe(values[0]);
    });

    it("should return maximum", () => {
      const { maximum } = getStatistics(values);
      expect(maximum).toBe(values[values.length - 1]);
    });

    it("should return average", () => {
      const { average } = getStatistics(values);
      const avg = (values[0] + values[1] + values[2]) / values.length;
      expect(average).toBe(avg);
    });

    it("should return values joined with a comma", () => {
      const { sorted } = getStatistics(values);
      const joined = `${values[0]}, ${values[1]}, ${values[2]}`;
      expect(sorted).toBe(joined);
    });
  });
});
