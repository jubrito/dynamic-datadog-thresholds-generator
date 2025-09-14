export type P95Value = number;

export type EndpointStats = {
  sorted: string;
  minimum: P95Value;
  maximum: P95Value;
  average: P95Value;
  median: P95Value;
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
