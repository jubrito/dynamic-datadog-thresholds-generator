export const Introduction = () => {
  return (
    <div className="text-left max-w-250">
      <h1 className="font-bold text-3xl uppercase">
        Dynamic Threshold Generator
      </h1>
      <h3 className="text-lg mt-3 mb-5">
        <span id="extract-and-upload-csv-description">
          Extract a Datadog endpoint metrics csv file using any percentile
          aggregation and upload it to generate warning and critical thresholds
          suggestions.
        </span>
        <span className="pl-1" id="configure-generator-description">
          Decide how rigorous you want to be by adjusting the configuration
          values at any time.
        </span>
      </h3>
    </div>
  );
};
