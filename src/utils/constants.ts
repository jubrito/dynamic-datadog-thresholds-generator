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
export const MONITOR_CONFIG_KEY = "monitor-configuration";

export const VARIANTS = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
} as const;
