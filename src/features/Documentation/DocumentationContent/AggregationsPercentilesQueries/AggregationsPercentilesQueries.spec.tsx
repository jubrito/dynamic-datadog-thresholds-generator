import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { AggregationsPercentilesQueries } from "./AggregationsPercentilesQueries";

describe("AggregationsPercentilesQueries", () => {
  const page = "Aggregations, Percentiles & Queries";
  const sectionTitles = [
    "Aggregations",
    "Percentiles",
    "Queries and Formulas with Percentiles",
  ];
  const sectionSubtitles = [
    "Advantages and disadvantages of each aggregation:",
  ];
  const aggregationsContent = [
    "To extract endpoint metrics, we need to decide what we're going to query.",
    "Aggregations are methods used to consolidate multiple data points into a single value.",
    "They determine how raw data points are grouped and summarized over a period of time:",
    "Average of data points over a time window.",
    "Minimum or maximum value within the time window.",
    "Sum of all values in the time window.",
    "Value below which a certain percentage of data points fall",
  ];

  const aggregationsAbbr = ["AVG", "MIN / MAX", "SUM", "PERCENTILE"];

  const aggregationsProsAndCons = [
    {
      label: "Average",
      content: [
        "Hides spikes",
        "Tilted by outliers",
        "Slow response to changes",
        "Does not highlight short-term anomalies that could indicate critical issues.",
      ],
    },
    {
      label: "Min / Max",
      content: [
        "Unreliable",
        "Too sensitive",
        "One anomaly can distort entire picture",
        "Prone to overreacting to single outliers, leading to unnecessary alerts.",
      ],
    },
    {
      label: "Sum",
      content: [
        "Doesn’t reflect speed",
        "Doesn’t reflect quality",
        "Fails to account for variations in traffic volume, making it unsuitable for dynamic environments.",
        "Not useful for performance thresholds as it can be misleading when comparing endpoints with vastly different request rates",
      ],
    },
    {
      label: "Percentile",
      content: [
        "Customizable Sensitivity: Can focus on the “bad but common” cases but also the worst case scenarios",
        "Easier to filter out noisy outliers (e.g., the 1% of requests that are abnormally slow)",
        "Detects gradual degradation early",
        "Scalable",
      ],
    },
  ];
  const percentilesContent = [
    "Percentile tell the value below which a given percentage of data falls",
    "If we analyze an endpoint request time:",
    "P50 (median)",
    /Means 50% of the requests are faster than this value and 50% are slower/,
    "P95 (95th percentile)",
    /Means 95% of the requests are faster than this value and 5% are slower/,
  ];
  const queriesAndFormulasContent = [
    "We can combine the request time with the p95 percentile to extract endpoint metrics using queries and figure out how slow the worst 5% of requests are",
    "Query:",
    "Formula:",
  ];
  const queriesAndFormulasCode = [
    "avg:app.request_time_ms.95percentile{api_env:prod,uri:/content_tools/<ENDPOINT_PATH>}",
    "x / 1000 // convert query above (which measures the request time) from ms to seconds",
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <AggregationsPercentilesQueries />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render title", () => {
    const title = screen.getByRole("heading", { level: 1, name: page });
    expect(title).toBeInTheDocument();
  });
});
