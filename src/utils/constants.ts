import { OpenDocumentationSection } from "../types/generator";

// Documentation
export const closeDocumentationSections: OpenDocumentationSection = {
  observability: false,
  datadog: false,
  monitorConfiguration: false,
  thresholds: false,
};

// Generator
export const insufficientDataValue = 5;

// Documentation routes
export const DOCUMENTATION_ROUTE = "/documentation";
export const OBSERVABILITY_KEY = "observability";
export const DATADOG_KEY = "datadog";
export const THRESHOLDS_KEY = "thresholds";
export const QUERIES_FORMULAS_KEY = "queries-formulas";
export const METRIC_MONITORS_KEY = "metric-monitors";
export const MONITOR_CONFIG_KEY = "monitor-configuration";
export const MONITORING_STRATEGIES_KEY = "monitoring-strategies";
export const AGGREGATIONS_PERCENTILES_QUERIES =
  "aggregations-percentiles-queries";

export const VARIANTS = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
} as const;
