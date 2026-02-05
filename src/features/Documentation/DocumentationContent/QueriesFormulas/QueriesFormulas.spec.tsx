import { screen } from "@testing-library/dom";
import { QueriesFormulas } from "./QueriesFormulas";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

const queriesSectionContent = [
  /Queries are used to retrieve raw or aggregated data from metrics, logs, or traces. They define what data to fetch and how to process it./,
  /A typical query in Datadog consists of the following components:/,
  /Metric Name:/,
  /The name of the metric you want to query \(e.g.,/,
  /Scope/,
  /Filters to narrow down the data, such as tags \(e.g.,/,
  /Aggregator/,
  /The method used to aggregate data points \(e.g., avg, sum, m in, max, percentile\)./,
  /Query example:/,
  /This query calculates the average duration of HTTP requests for the/,
  /service in the/,
  /environment/,
];

const queryCodes = [
  "system.cpu.user",
  "http.request.duration",
  "env:prod",
  "service:api",
  "api",
  "prod",
  "avg:http.request.duration_in_secs{env:prod,uri:your_team/api_endpoint_example_1}",
];

const formulaSectionContent = [
  /Formulas are used to perform calculations on the results of queries./,
  /They allow you to combine multiple queries, apply mathematical operations, and create custom metrics or visualizations./,
  /Arithmetic Operations:/,
  /Add, subtract, multiply, or divide query results./,
  /Functions:/,
  /Apply mathematical functions like/,
  /Conditional Logic:/,
  /statements to create conditional formulas./,
  /Formula example:/,
];

const formulaCodes = [
  "log",
  "sqrt",
  "rolling_avg",
  "if",
  "x / 1000 // convert query above (which measures the request time) from ms to seconds",
];

describe("QueriesFormulas", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <QueriesFormulas />
      </BrowserRouter>
    );
  });

  it("should render main title", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Queries and Formulas" })
    ).toBeInTheDocument();
  });
});
