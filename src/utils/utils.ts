import { EndpointStats, Percentile } from "../types/types";
import { getAverage, getMedian } from "./statistics";

export const getStatistics = (
  sortedPercentiles: Percentile[]
): EndpointStats => {
  const minimum = sortedPercentiles[0];
  const maximum = sortedPercentiles[sortedPercentiles.length - 1];
  const average = getAverage(sortedPercentiles);
  const median = getMedian(sortedPercentiles);
  const numberOfElements = sortedPercentiles.length;

  return {
    sorted: sortedPercentiles.join(", "),
    minimum,
    maximum,
    average,
    median,
    numberOfElements,
  };
};

export const getSortedAscending = (values: Percentile[]) =>
  values.sort((a, b) => a - b);

export const getWithNDecimalPlaces = (value: Percentile, decimalPlaces = 3) =>
  value.toFixed(decimalPlaces);
