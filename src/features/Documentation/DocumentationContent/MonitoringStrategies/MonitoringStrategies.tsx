import { Divider } from "../../../../components/Divider/Divider";
import { PreviousNextButtons } from "../../../../components/PreviousNextButtons/PreviousNextButtons";
import { DATADOG_KEY, DOCUMENTATION_ROUTE } from "../../../../utils/constants";

export const MonitoringStrategies = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Monitoring Strategies</h1>
      <p className="text-2xl">Blanket Monitors</p>
      <Divider />
      <PreviousNextButtons
        next={{
          label: "Datadog",
          path: `${DOCUMENTATION_ROUTE}/${DATADOG_KEY}`,
        }}
      />
    </div>
  );
};
