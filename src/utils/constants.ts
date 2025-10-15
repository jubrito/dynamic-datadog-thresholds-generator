import { OpenDocumentationSection } from "../types/types";

export const closeDocumentationSections: OpenDocumentationSection = {
  observability: false,
  datadog: false,
  monitorConfiguration: false,
  thresholds: false,
};

export const insufficientDataValue = 5;

// Documentation routes
export const DOCUMENTATION_ROUTE = "/documentation";
export const OBSERVABILITY_KEY = "observability";
export const DATADOG_KEY = "datadog";
export const THRESHOLDS_KEY = "thresholds";
export const MONITOR_CONFIG_KEY = "monitor-configuration";
