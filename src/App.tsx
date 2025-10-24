import { BrowserRouter, Route, Routes } from "react-router";
import { Nav } from "./features/Nav/Nav";
import { Generator } from "./features/Generator/Generator";
import { Documentation } from "./features/Documentation/Documentation";
import { Datadog } from "./components/DocumentationContent/DocumentationPagesContent/Datadog/Datadog";
import { Observability } from "./components/DocumentationContent/DocumentationPagesContent/Observability/Observability";
import { Thresholds } from "./components/DocumentationContent/DocumentationPagesContent/Thresholds/Thresholds";
import { MonitorConfiguration } from "./components/DocumentationContent/DocumentationPagesContent/MonitorConfiguration/MonitorConfiguration";

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
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
