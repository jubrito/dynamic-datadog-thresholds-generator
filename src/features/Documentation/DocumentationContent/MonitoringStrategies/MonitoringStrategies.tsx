import { ColorBox } from "../../../../components/ColorBox/ColorBox";
import { Divider } from "../../../../components/Divider/Divider";
import { PreviousNextButtons } from "../../../../components/PreviousNextButtons/PreviousNextButtons";
import {
  DOCUMENTATION_ROUTE,
  MONITOR_CONFIG_KEY,
} from "../../../../utils/constants";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const MonitoringStrategies = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Monitoring Strategies</h1>
      <table className="column-gap-20">
        <thead>
          <tr>
            <th className="text-2xl">
              <ColorBox style="px-5 bg-pink-600 mr-10">
                Blanket Monitors
              </ColorBox>
            </th>
            <th className="text-2xl">
              <ColorBox style="px-5 bg-violet-500">Targeted Monitors</ColorBox>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pt-4 pr-10">
              <PlayArrowIcon className="text-pink-600 pr-1 " />
              <strong>Singular latency threshold</strong>
            </td>
            <td className="pt-4">
              <PlayArrowIcon className="text-violet-500 pr-1" />
              <strong>Specific tailored thresholds per endpoint</strong>
            </td>
          </tr>
          <tr>
            <td className="pt-4 pr-10">
              <PlayArrowIcon className="text-pink-600 pr-1" />
              Based on median (p50)
            </td>
            <td className="pt-4">
              <PlayArrowIcon className="text-violet-500 pr-1" />
              Can be based on specific percentiles (ex: p95)
            </td>
          </tr>
          <tr>
            <td className="pt-4 pr-10">
              <PlayArrowIcon className="text-pink-600 pr-1" />
              Measures the typical user experience
            </td>
            <td className="pt-4">
              <PlayArrowIcon className="text-violet-500 pr-1" />
              Measures how slow users are affected
            </td>
          </tr>
          <tr>
            <td className="pt-4 pr-10">
              <PlayArrowIcon className="text-pink-600 pr-1" />
              Simple setup, but less scalable
            </td>
            <td className="pt-4">
              <PlayArrowIcon className="text-violet-500 pr-1" />
              Laborious setup, but more scalable
            </td>
          </tr>
          <tr>
            <td className="pt-4 font-bold pr-10">
              <p className="border-1 border-pink-500 p-5">
                Alerts might not reflect endpoints' reality: what's considered
                "normal" for one endpoint could be "abnormal" for another
              </p>
            </td>
            <td className="pt-4 font-bold">
              <p className="border-1 border-violet-500 p-5">
                Meaningful alerts considering endpoints characteristics: each
                threshold defined considers what is "normal" for that endpoint
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <Divider />
      <PreviousNextButtons
        previous={{
          label: "Monitor Configuration",
          path: `${DOCUMENTATION_ROUTE}/${MONITOR_CONFIG_KEY}`,
        }}
      />
    </div>
  );
};
