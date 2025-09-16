import { useState } from "react";
import { Configuration } from "../../components/Configuration/Configuration";
import { ThresholdsGenerator } from "../ThresholdsGenerator";
import type { ThresholdsConfig } from "../../types/types";

export const Home = () => {
  const [thresholdsConfig, setThresholdsConfig] = useState<ThresholdsConfig>({
    critical: {
      factor: 95,
      percentile: 99,
    },
    warning: {
      factor: 80,
      percentile: 95,
    },
  });

  return (
    <main className="grid xl:grid-cols-2 grid-cols-1 grid-rows-1 gap-15">
      <ThresholdsGenerator thresholdsConfig={thresholdsConfig} />
      <Configuration
        thresholdsConfig={thresholdsConfig}
        updateThresholdsConfig={setThresholdsConfig}
      />
    </main>
  );
};
