import type { Percentile, ThresholdsConfig } from "../types/types";
import {
  filterExtremeValues,
  getIQR,
  getInterpolatedPercentile,
} from "./statistics";
import { getWithNDecimalPlaces } from "./utils";

/**
 * Calculates thresholds based on warning and critical percentiles and factors:
 * Warning: Focus on consistently slow days (Recommended; 95th percentile of received percentiles)
 * Critical: Focus on outlier spikes, tail latency (Recommended: 99th percentile of received percentiles)
 * @param – sortedPercentiles: The percentile values extracted from the endpoint metrics (e.g P95)
 * @param – {warning, critical}: The warning and critical percentiles and factors
 * @returns warning and critical thresholds
 */
export const computeAdaptiveThresholds = (
  sortedPercentiles: Percentile[],
  { warning, critical }: ThresholdsConfig
) => {
  const { percentile: warningPercentile, factor: warningFactor } = warning;
  const { percentile: criticalPercentile, factor: criticalFactor } = critical;
  const filteredPercentiles = filterExtremeValues(sortedPercentiles);
  const warningInterpolatedPercentile = getInterpolatedPercentile(
    warningPercentile,
    filteredPercentiles
  );
  const criticalInterpolatedPercentile = getInterpolatedPercentile(
    criticalPercentile,
    filteredPercentiles
  );
  const iqr = getIQR(filteredPercentiles);

  if (iqr == undefined) {
    console.warn("Failt to calculate thresholds due to insufficient data.");
    return { warningThreshold: undefined, criticalThreshold: undefined };
  }

  const warningThreshold = getThresholdWithTukeyFence(
    warningInterpolatedPercentile,
    warningFactor,
    iqr
  );
  const criticalThreshold = getThresholdWithTukeyFence(
    criticalInterpolatedPercentile,
    criticalFactor,
    iqr
  );

  return { warningThreshold, criticalThreshold };
};

/**
 * Function to calculates a dynamic threshold using a percentile baseline scaled by the IQR.
 * Inspired by Tukey's fences, but used for thresholding rather than outlier detection.
 * It ensures statistically robust alerting by accounting for natural data variability.
 * Traditional fixed thresholds often fail in dynamic systems—either missing real issues
 * (if too forgiving) or causing false alerts (if too strict).
 * @param interpolatedPercentile - The interpolated percentile (e.g., P95, P99).
 * @param factor - Multiplier for IQR (e.g. 1.5 for "mild" thresholds, 3 for "extreme").
 * @param iqr - The Interquartile Range (IQR = Q3 - Q1).
 * @returns - Threshold value rounded to specified decimal places.
 */
export const getThresholdWithTukeyFence = (
  interpolatedPercentile: number,
  factor: number,
  iqr: number
) => {
  const threshold = interpolatedPercentile + factor * iqr;
  return parseFloat(getWithNDecimalPlaces(threshold));
};
