import type { ThresholdsConfig } from "../../types/types";
import { darkGrayBlue } from "../../utils/styles";
import { configureGeneratorDescriptionId } from "../Introduction/Introduction";
import { ConfigOptions } from "./ConfigOptions/ConfigOptions";

type ConfigurationProps = {
  thresholdsConfig: ThresholdsConfig;
  updateThresholdsConfig: React.Dispatch<
    React.SetStateAction<ThresholdsConfig>
  >;
};

const configurationLabelId = "configuration-label-id";

export const Configuration = ({
  thresholdsConfig,
  updateThresholdsConfig,
}: ConfigurationProps) => {
  const { critical, warning } = thresholdsConfig;
  return (
    <section
      className="flex flex-col items-center xl:w-min w-full h-full"
      aria-describedby={configureGeneratorDescriptionId}
      role="region"
      aria-labelledby={configurationLabelId}
    >
      <h2
        className={`font-bold text-2xl w-full ${darkGrayBlue.background} pl-6 pt-4 text-left rounded-t-lg`}
        id={configurationLabelId}
      >
        Generator configuration
      </h2>

      <div
        className={`p-5 w-full h-max ${darkGrayBlue.background} rounded-b-lg`}
      >
        <div className="flex gap-5 flex-col lg:flex-row flex-wrap xl:flex-nowrap">
          <ConfigOptions
            thresholdType="Warning"
            defaultPercentile={warning.percentile}
            defaultFactor={warning.factor}
            updateConfig={(config) => {
              updateThresholdsConfig((prevValue) => ({
                ...prevValue,
                warning: {
                  ...prevValue.warning,
                  ...config,
                },
              }));
            }}
          />
          <ConfigOptions
            thresholdType="Critical"
            defaultPercentile={critical.percentile}
            defaultFactor={critical.factor}
            updateConfig={(config) => {
              updateThresholdsConfig((prevValue) => ({
                ...prevValue,
                critical: {
                  ...prevValue.warning,
                  ...config,
                },
              }));
            }}
          />
        </div>
        <p className="mt-6 mb-2 text-md text-left italic sr-only">
          High rigour factors and percentiles will generate stricter results and
          lead to less noisy alerts by increasing rigorousness and focusing on
          the slowest requests instead of typical ones.
        </p>
      </div>
    </section>
  );
};
