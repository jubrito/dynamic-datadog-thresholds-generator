import { BrowserRouter, Route, Routes } from "react-router";
import { Nav } from "./features/Nav/Nav";
import { Generator } from "./features/Generator/Generator";
import { Documentation } from "./features/Documentation/Documentation";
import { Observability } from "./features/Documentation/DocumentationContent/Observability/Observability";
import { Datadog } from "./features/Documentation/DocumentationContent/Datadog/Datadog";
import { MonitorConfiguration } from "./features/Documentation/DocumentationContent/MonitorConfiguration/MonitorConfiguration";
import { Thresholds } from "./features/Documentation/DocumentationContent/Thresholds/Thresholds";
import { MonitoringStrategies } from "./features/Documentation/DocumentationContent/MonitoringStrategies/MonitoringStrategies";

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
              <Route path="observability" element={<Observability />} />
              <Route path="datadog" element={<Datadog />} />
              <Route path="thresholds" element={<Thresholds />} />
              <Route
                path="monitor-configuration"
                element={<MonitorConfiguration />}
              />
              <Route
                path="monitoring-strategies"
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
