import { Generator } from "../Generator/Generator";
import { Nav } from "../Nav/Nav";

export const Home = () => {
  return (
    <main className="grid grid-col-1 grid-row-2 gap-2">
      <Nav />
      <Generator />
    </main>
  );
};
