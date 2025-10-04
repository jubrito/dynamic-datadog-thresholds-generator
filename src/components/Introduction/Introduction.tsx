export const configureGeneratorDescriptionId =
  "configure-generator-description-id";
export const extractAndUploadCsvDescriptionI =
  "extract-and-upload-csv-description";

export const Introduction = () => {
  return (
    <div className="text-left max-w-250">
      <h1 className="font-bold text-3xl uppercase">
        Dynamic Threshold Generator
      </h1>
      <h3 className="text-lg mt-3 mb-5">
        <span id={extractAndUploadCsvDescriptionI}>
          Extract a Datadog endpoint metrics csv file using any percentile
          aggregation and upload it to generate warning and critical thresholds
          suggestions.
        </span>
        <span className="pl-1" id={configureGeneratorDescriptionId}>
          Configure the generator to define how rigorous you want the threshold
          suggestions to be.
        </span>
      </h3>
    </div>
  );
};
