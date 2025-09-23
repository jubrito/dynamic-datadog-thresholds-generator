import {
  computeAdaptiveThresholds,
  getThresholdWithTukeyFence,
} from "./thresholds";
import type { ThresholdsConfig } from "../types/types";
import * as statistics from "./statistics";

// Mock dependencies
jest.mock("./statistics", () => ({
  filterExtremeValues: (arr: number[]) => arr,
  getIQR: () => 2,
  getInterpolatedPercentile: () => 10,
}));
jest.mock("./utils", () => ({
  getWithNDecimalPlaces: (n: number) => n.toFixed(2),
}));

describe("thresholds", () => {
  describe("computeAdaptiveThresholds", () => {
    const config: ThresholdsConfig = {
      warning: { percentile: 95, factor: 1.5 },
      critical: { percentile: 99, factor: 3 },
    };

    it("returns correct thresholds for valid input", () => {
      const result = computeAdaptiveThresholds([10, 20, 30], config);
      // getInterpolatedPercentile returns arr[0] = 10, getIQR returns 2
      // warning: 10 + 1.5*2 = 13, critical: 10 + 3*2 = 16
      expect(result.warningThreshold).toBeCloseTo(13.0);
      expect(result.criticalThreshold).toBeCloseTo(16.0);
    });

    it("should return undefined thresholds if IQR is undefined", () => {
      jest.spyOn(statistics, "getIQR").mockReturnValue(undefined);
      const result = computeAdaptiveThresholds([10, 20, 30], config);
      expect(result.warningThreshold).toBeUndefined();
      expect(result.criticalThreshold).toBeUndefined();
    });

    it("should return undefined thresholds if input array is empty", () => {
      const result = computeAdaptiveThresholds([], config);
      expect(result.warningThreshold).toBeUndefined();
      expect(result.criticalThreshold).toBeUndefined();
    });
  });

  describe("getThresholdWithTukeyFence", () => {
    it("calculates threshold correctly with positive values", () => {
      expect(getThresholdWithTukeyFence(10, 2, 5)).toBeCloseTo(20.0);
    });

    it("returns correct value with zero factor", () => {
      expect(getThresholdWithTukeyFence(10, 0, 5)).toBeCloseTo(10.0);
    });

    it("returns correct value with zero IQR", () => {
      expect(getThresholdWithTukeyFence(10, 2, 0)).toBeCloseTo(10.0);
    });

    it("handles negative values", () => {
      expect(getThresholdWithTukeyFence(-5, 2, 3)).toBeCloseTo(1.0);
    });

    it("returns NaN if any argument is NaN", () => {
      expect(getThresholdWithTukeyFence(NaN, 2, 3)).toBeNaN();
      expect(getThresholdWithTukeyFence(10, NaN, 3)).toBeNaN();
      expect(getThresholdWithTukeyFence(10, 2, NaN)).toBeNaN();
    });
  });
});
