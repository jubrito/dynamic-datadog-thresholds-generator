import { EndpointStats } from "../../../types/types";

type EndpointStatisticsProps = {
  endpointStats: EndpointStats;
};

export const EndpointStatistics = ({
  endpointStats,
}: EndpointStatisticsProps) => {
  const insufficientData = endpointStats.numberOfElements < 4;

  return (
    <>
      <p>
        <strong>Sorted percentiles:</strong> [{endpointStats.sorted}]
      </p>
      <p>
        <strong>Number of values analyzed:</strong>{" "}
        {endpointStats.numberOfElements}
      </p>
      <p>
        <strong>Minimum:</strong> {endpointStats.minimum}
        <strong>Maximum:</strong> {endpointStats.maximum}
        <strong>Average:</strong> {endpointStats.average}
        <strong>Median:</strong> {endpointStats.median}
      </p>
      {insufficientData && (
        <p>
          <i>
            <strong>Note:</strong> Not enough data: enter more than four values
            for a more accurate result.
          </i>
        </p>
      )}
    </>
  );
};
