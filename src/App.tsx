import { Configuration } from "./components/Configuration/Configuration";
import { ThresholdsGenerator } from "./features/ThresholdsGenerator";

function App() {
  return (
    <main className="grid grid-cols-2 grid-rows-1 gap-15">
      <Configuration />
      <ThresholdsGenerator />
    </main>
  );
}

export default App;
