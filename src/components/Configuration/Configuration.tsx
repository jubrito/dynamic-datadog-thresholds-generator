import { ConfigOptions } from "./ConfigOptions/ConfigOptions";

export const Configuration = () => {
  return (
    <section className="flex flex-col lg:items-end items-center size-max">
      <h2 className="font-bold text-2xl w-full bg-[#2a2c3e] pl-8 py-3 text-left rounded-t-lg">
        Generator configuration
      </h2>

      <div className="p-8 w-full h-full bg-[#11131f] max-w-[505px] rounded-b-lg">
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
          Tip: High rigour factors and percentiles will generate stricter
          results and lead to less noisy alerts by increasing rigorousness and
          focusing on the slowest requests instead of the typical ones.
        </p>
      </div>
    </section>
  );
};
