import type { Percentile } from "../types/types";
import { insufficientDataValue } from "./constants";
import { getWithNDecimalPlaces } from "./utils";

export const getAverage = (sortedPercentiles: Percentile[]) => {
  const numberOfItems = sortedPercentiles.length;
  const sum = sortedPercentiles.reduce((acc, value) => acc + value, 0);
  const approximation = getWithNDecimalPlaces(sum / numberOfItems);
  return parseFloat(approximation);
};

export const getMedian = (sortedPercentiles: Percentile[]) => {
  const numberOfItems = sortedPercentiles.length;
  if (numberOfItems === 1) {
    const [firstItem] = sortedPercentiles;
    const approximation = getWithNDecimalPlaces(firstItem);
    return parseFloat(approximation);
  }

  const isEven = numberOfItems % 2 === 0;
  if (!isEven) {
    const middleElement = sortedPercentiles[Math.floor(numberOfItems / 2)];
    const approximation = getWithNDecimalPlaces(middleElement);
    return parseFloat(approximation);
  }
  const lastBeforeMiddle = numberOfItems / 2;
  const firstAfterMiddle = lastBeforeMiddle + 1;
  const lastBeforeMiddleElement = sortedPercentiles[lastBeforeMiddle - 1];
  const firstAfterMiddleElement = sortedPercentiles[firstAfterMiddle - 1];
  const avg = (lastBeforeMiddleElement + firstAfterMiddleElement) / 2;
  const approximation = getWithNDecimalPlaces(avg);
  return parseFloat(approximation);
};

/**
 * Computes the N-th percentile of a sorted numeric array using linear interpolation.
 *
 * For non-integer ranks, this function interpolates between the two nearest ranks
 * to provide a more accurate result—especially important for small or sparse datasets.
 *
 * @param percentileN - The desired percentile (0 to 100)
 * @param sortedValues - A sorted array of numeric values in ascending order
 * @returns The computed percentile value. Returns 0 if the array is empty
 *
 * @example
 * getInterpolatedPercentile(50, [1, 2, 3, 4, 5]); // → 3 (median)
 * getInterpolatedPercentile(50, [1, 2, 3, 4]); // → 2.5
 */
export const getInterpolatedPercentile = (
  percentileN: number,
  sortedValues: number[]
) => {
  if (sortedValues.length < 2 || percentileN < 1) return 0;

  const rank = (percentileN / 100) * (sortedValues.length - 1);
  const lowerIndex = Math.floor(rank);
  const upperIndex = Math.ceil(rank);

  // If rank is an integer, return the value directly
  if (lowerIndex === upperIndex) {
    return sortedValues[lowerIndex];
  }
  return getLinearInterpolation(sortedValues, rank);
};

/**
 * Linear interpolation estimates the value of a function between any two known values.
 *
 * It is specially useful to deal with non-integer numbers with precision
 * Instead of round-based indexing, linear interpolation between lower and upper values allows
 * smoother transitions between sparse values. This is specially important for small datasets.
 */
const getLinearInterpolation = (sortedValues: number[], rank: number) => {
  const lowerIndex = Math.floor(rank);
  const upperIndex = Math.ceil(rank);
  const lowerValue = sortedValues[lowerIndex];
  const upperValue = sortedValues[upperIndex];
  const weight = rank - lowerIndex;
  const linearInterpolation = lowerValue + (upperValue - lowerValue) * weight;

  return linearInterpolation;
};

export const getQ1 = (sortedValues: number[]) =>
  getInterpolatedPercentile(25, sortedValues);
export const getQ3 = (sortedValues: number[]) =>
  getInterpolatedPercentile(75, sortedValues);

/**
 * Computes the Interquartile Range (IQR) of a sorted dataset.
 * It measures the spread of the middle half of your data. 
 * It is the range for the middle 50% of your sample and can be used to identify outliers.
 * 
 * The IQR is defined as Q3 - Q1, where:
 * - Q1 is the 25th percentile
 * - Q3 is the 75th percentile
 *
 * @param sortedValues - A sorted array of numeric values in ascending order.
 * @returns The IQR (Q3 - Q1) rounded to a fixed number of decimal places, or undefined if percentiles can't be computed.

 * @example
 * const iqr = computeIQR([1, 2, 3, 4, 5]); // 2
 */
export const getIQR = (sortedValues: number[]) => {
  const q1 = getQ1(sortedValues);
  const q3 = getQ3(sortedValues);
  if (q1 == undefined || q3 == undefined) return undefined;
  const approximation = getWithNDecimalPlaces(q3 - q1);
  return parseFloat(approximation);
};

/**
 * Filters out extreme outlier values from a sorted dataset using the Interquartile Range (IQR) method.
 *
 * This is useful when computing percentiles in datasets where a small number of large or small values
 * can distort statistical measures like P90 or P95.
 *
 * The lower fence in a dataset, when using the interquartile range (IQR) method for outlier detection,
 * is calculated by subtracting 1.5 times the IQR from the first quartile (Q1). This value serves as a threshold;
 * any data point below the lower fence is considered an outlier.
 *
 * @param sortedValues - A sorted array of numbers (ascending order).
 * @returns A new array excluding extreme values (outliers) based on IQR filtering.
 *
 * @example
 * // Given values mostly near 0 with a few large spikes:
 * const values = [0.01, 0.02, ..., 1.2, 2.4, 100];
 * const filtered = filterOutliersIQR(values);
 */
export const filterExtremeValues = (
  sortedValues: number[],
  iqrMultiplier = 1.5
) => {
  const q1 = getQ1(sortedValues);
  const q3 = getQ3(sortedValues);
  const iqr = getIQR(sortedValues);
  if (iqr == null) return [];

  const lowerFence = q1 - iqrMultiplier * iqr;
  const upperFence = q3 + iqrMultiplier * iqr;

  return sortedValues.filter((v) => v >= lowerFence && v <= upperFence);
};

export const isDataInsufficient = (numberOfValues: number) => {
  return numberOfValues < insufficientDataValue;
};
