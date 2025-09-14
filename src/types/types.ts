export type percentile = number;

export type EndpointStats = {
  sorted: string;
  minimum: percentile;
  maximum: percentile;
  average: percentile;
  median: percentile;
  numberOfElements: number;
};

export type ThresholdData = {
  metricValues: number[];
  endpointPath?: string;
};

export type ThresholdsConfig = {
  warning: {
    percentile: number;
    factor: number;
  };
  critical: {
    percentile: number;
    factor: number;
  };
};
