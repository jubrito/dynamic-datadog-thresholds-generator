import { BrowserRouter, Route, Routes } from "react-router";
import { Nav } from "./features/Nav/Nav";
import { Generator } from "./features/Generator/Generator";
import { Documentation } from "./features/Documentation/Documentation";
import { Observability } from "./features/Documentation/DocumentationContent/Observability/Observability";
import { Datadog } from "./features/Documentation/DocumentationContent/Datadog/Datadog";
import { Thresholds } from "./features/Generator/Thresholds/Thresholds";
import { MonitorConfiguration } from "./features/Documentation/DocumentationContent/MonitorConfiguration/MonitorConfiguration";

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
              <Route
                path="thresholds"
                element={
                  <Thresholds
                    sortedPercentileValues={[]}
                    thresholdsConfig={{
                      warning: {
                        percentile: 0,
                        factor: 0,
                      },
                      critical: {
                        percentile: 0,
                        factor: 0,
                      },
                    }}
                  />
                }
              />
              <Route
                path="monitor-configuration"
                element={<MonitorConfiguration />}
              />
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
