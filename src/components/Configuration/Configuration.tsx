import { ConfigOptions } from "./ConfigOptions/ConfigOptions";

export const Configuration = () => {
  return (
    <section className="w-full h-max align-left text-left">
      <h2 className="text-2xl">Generator configuration</h2>
      <h3 className="text-lg mt-1 mb-5">How rigorous do you want to be?</h3>

      <div className="p-8 w-full h-full border-1 border-white rounded-lg max-w-[505px]">
        <div className="flex justify-between">
          <ConfigOptions
            thresholdType="Critical"
            defaultPercentile={99}
            defaultFactor={95}
          />
          <ConfigOptions
            thresholdType="Warning"
            defaultPercentile={95}
            defaultFactor={80}
          />
        </div>
        <p className="mt-8 text-sm">
          Tip: The higher the percentile and the factor chosen, the stricter the
          result will be. If you are more strict, you will generate thresholds
          that will lead to less noisy alerts and will focus on slowest
          requests.
        </p>
      </div>
    </section>
  );
};
