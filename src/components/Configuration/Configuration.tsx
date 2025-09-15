import { ConfigOptions } from "./ConfigOptions/ConfigOptions";

export const Configuration = () => {
  return (
    <section className="w-full h-full align-left text-left">
      <h2 className="text-2xl">Generator configuration</h2>
      <h3 className="text-lg my-5">How rigorous do you want to be?</h3>

      <div className="flex p-8 w-full h-full border-1 border-white rounded-lg">
        <ConfigOptions thresholdOption="Critical" />
        <ConfigOptions thresholdOption="Warning" />
      </div>
    </section>
  );
};
