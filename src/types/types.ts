export type Percentile = number;

export type EndpointStats = {
  sorted: string;
  minimum: Percentile;
  maximum: Percentile;
  average: Percentile;
  median: Percentile;
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
