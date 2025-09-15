import { Configuration } from "./components/Configuration/Configuration";
import { ThresholdsGenerator } from "./features/ThresholdsGenerator";

function App() {
  return (
    <main className="grid xl:grid-cols-2 grid-cols-1 grid-rows-1">
      <Configuration />
      <ThresholdsGenerator />
    </main>
  );
}

export default App;
