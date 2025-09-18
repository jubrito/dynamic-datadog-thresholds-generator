import { BrowserRouter, Route, Routes } from "react-router";
import { Nav } from "./features/Nav/Nav";
import { Generator } from "./features/Generator/Generator";
import { Documentation } from "./features/Documentation/Documentation";

function App() {
  return (
    <BrowserRouter>
      <main className="grid grid-col-1 grid-row-2 gap-2">
        <Nav />
        <div className="my-0 mx-auto max-w-350 mt-18 p-13">
          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
