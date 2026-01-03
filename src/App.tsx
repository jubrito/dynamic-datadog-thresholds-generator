import { BrowserRouter, Route, Routes } from "react-router";
import { Nav } from "./features/Nav/Nav";
import { Generator } from "./features/Generator/Generator";
import { Documentation } from "./features/Documentation/Documentation";
import { Observability } from "./features/Documentation/DocumentationContent/Observability/Observability";
import { Datadog } from "./features/Documentation/DocumentationContent/Datadog/Datadog";
import { MonitorConfiguration } from "./features/Documentation/DocumentationContent/MonitorConfiguration/MonitorConfiguration";
import { Thresholds } from "./features/Documentation/DocumentationContent/Thresholds/Thresholds";
import { MonitoringStrategies } from "./features/Documentation/DocumentationContent/MonitoringStrategies/MonitoringStrategies";
import {
  DATADOG_KEY,
  METRIC_MONITORS_KEY,
  MONITOR_CONFIG_KEY,
  MONITORING_STRATEGIES_KEY,
  OBSERVABILITY_KEY,
  QUERIES_FORMULAS_KEY,
  THRESHOLDS_KEY,
} from "./utils/constants";
import { MetricMonitors } from "./features/Documentation/DocumentationContent/MetricMonitors/MetricMonitors";
import { QueriesFormulas } from "./features/Documentation/DocumentationContent/QueriesFormulas/QueriesFormulas";

function App() {
  return (
    <BrowserRouter>
      <main className="grid grid-col-1 grid-row-2 gap-2">
        <Nav />
        <div className="mt-18">
          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="/documentation" element={<Documentation />}>
              <Route index element={<Observability />} />
              <Route path={OBSERVABILITY_KEY} element={<Observability />} />
              <Route path={DATADOG_KEY} element={<Datadog />} />
              <Route path={THRESHOLDS_KEY} element={<Thresholds />} />
              <Route
                path={QUERIES_FORMULAS_KEY}
                element={<QueriesFormulas />}
              />
              <Route path={METRIC_MONITORS_KEY} element={<MetricMonitors />} />
              <Route
                path={MONITOR_CONFIG_KEY}
                element={<MonitorConfiguration />}
              />
              <Route
                path={MONITORING_STRATEGIES_KEY}
                element={<MonitoringStrategies />}
              />
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
