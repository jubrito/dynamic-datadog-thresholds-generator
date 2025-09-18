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

export type ThresholdConfig = {
  percentile: number;
  factor: number;
};

export type ThresholdsConfig = {
  warning: ThresholdConfig;
  critical: ThresholdConfig;
};

export type OpenDocumentationSection = {
  observability: boolean;
  datadog: boolean;
  thresholds: boolean;
  monitorConfiguration: boolean;
};
