import { ConfigOptions } from "./ConfigOptions/ConfigOptions";

export const Configuration = () => {
  return (
    <section className="size-full align-left text-left">
      <h2 className="text-2xl">Generator configuration</h2>
      <h3 className="text-lg mt-1 mb-5">How rigorous do you want to be?</h3>

      <div className="flex justify-between p-8 h-full border-1 border-white rounded-lg">
        <ConfigOptions thresholdType="Critical" defaultPercentile={99} />
        <ConfigOptions thresholdType="Warning" defaultPercentile={95} />
      </div>
    </section>
  );
};
