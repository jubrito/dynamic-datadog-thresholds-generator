import { ColorBox } from "../../../ColorBox/ColorBox";
import { Divider } from "../../../Divider/Divider";
import { PreviousNextButtons } from "../../../PreviousNextButtons/PreviousNextButtons";

export const Thresholds = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Thresholds</h1>
      <p className="text-2xl">What is it and why does it matter?</p>
      <p
        aria-label="Thresholds are predefined values that trigger alerts when a metric
        crosses them. They act as boundaries for monitoring conditions, allowing
        you to define when a metric crosses them. They act as boundaries for
        monitoring conditions, allowing you to define alert or warning state."
      >
        <span aria-hidden="true">Thresholds are predefined</span>
        <span className="text-pink-300 font-bold mx-1" aria-hidden="true">
          values that trigger alerts
        </span>
        <span aria-hidden="true">
          when a metric crosses them. They act as boundaries for monitoring
          conditions, allowing you to define
        </span>
        <span className="font-bold" aria-hidden="true">
          <span aria-hidden="true">
            when a system is considered to be in an
          </span>
          <span className="text-pink-300 mx-1">alert</span>
          <span aria-hidden="true">or</span>
          <span className="text-orange-300 mx-1">warning</span> state.
        </span>
      </p>
      <Divider />
      <div>
        <p className="font-bold text-lg" id="when-defining-thresholds-label">
          When defining thresholds, static and arbitrary values should be
          avoided as they can lead to:
        </p>
        <ul
          className="list-inside list-disc"
          aria-labelledby="when-defining-thresholds-label"
        >
          <li className="py-4">Noisy alerts.</li>
          <li>Missed anomalies.</li>
        </ul>
      </div>
      <ColorBox style="bg-pink-600 text-white w-fit">
        But how to set appropriate thresholds values when configuring alerts?
      </ColorBox>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Datadog",
          path: "/documentation/datadog",
        }}
        next={{
          label: "Monitor Configuration",
          path: "/documentation/monitor-configuration",
        }}
      />
    </div>
  );
};
