import { ColorBox } from "../../../../components/ColorBox/ColorBox";
import { Divider } from "../../../../components/Divider/Divider";
import { PreviousNextButtons } from "../../../../components/PreviousNextButtons/PreviousNextButtons";
import {
  DOCUMENTATION_ROUTE,
  METRIC_MONITORS_KEY,
  THRESHOLDS_KEY,
} from "../../../../utils/constants";

export const QueriesFormulas = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Queries and Formulas</h1>
      <h2 className="text-2xl">Queries</h2>
      <p>
        Queries are used to retrieve raw or aggregated data from metrics, logs,
        or traces. They define what data to fetch and how to process it.
      </p>
      <p>A typical query in Datadog consists of the following components:</p>
      <ul className="list-inside list-disc">
        <li>
          <strong>Metric Name: </strong> The name of the metric you want to
          query (e.g., <code>system.cpu.user</code>,
          <code className="pl-1">http.request.duration</code>)
        </li>
        <li className="my-4">
          <strong>Scope: </strong>Filters to narrow down the data, such as tags
          (e.g.,
          <code>env:prod</code>, <code>service:api</code>).
        </li>
        <li>
          <strong>Aggregator: </strong>The method used to aggregate data points
          (e.g., avg, sum, m in, max, percentile).
        </li>
      </ul>
      <h3 className="text-lg">
        <strong>Query example:</strong>
      </h3>
      <ColorBox style="bg-gray-400 w-max">
        <code>{`avg:http.request.duration_in_secs{env:prod,uri:your_team/api_endpoint_example_1}`}</code>
      </ColorBox>
      <p>
        This query calculates the average duration of HTTP requests for the{" "}
        <code className="pr-1">api</code>
        service in the <code>prod</code> environment.
      </p>
      <Divider />
      <h2 className="text-2xl">Formulas</h2>
      <p>
        Formulas are used to perform calculations on the results of queries.
      </p>
      <p>
        They allow you to combine multiple queries, apply mathematical
        operations, and create custom metrics or visualizations.
      </p>
      <ul className="list-inside list-disc">
        <li>
          <strong>Arithmetic Operations: </strong>Add, subtract, multiply, or
          divide query results.
        </li>
        <li className="my-4">
          <strong>Functions: </strong>Apply mathematical functions like{" "}
          <code>log</code>, <code>sqrt</code>, or <code>rolling_avg</code>).
        </li>
        <li>
          <strong>Conditional Logic: </strong> Use <code>if</code> statements to
          create conditional formulas.
        </li>
      </ul>
      <h3 className="text-lg">
        <strong>Formula example:</strong>
      </h3>
      <ColorBox style="bg-gray-400 w-max">
        <code>{`x / 1000 // convert query above (which measures the request time) from ms to seconds`}</code>
      </ColorBox>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Thresholds",
          path: `${DOCUMENTATION_ROUTE}/${THRESHOLDS_KEY}`,
        }}
        next={{
          label: "Metric Monitors",
          path: `${DOCUMENTATION_ROUTE}/${METRIC_MONITORS_KEY}`,
        }}
      />
    </div>
  );
};
