import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import type { ThresholdData } from "../../types/types";
import type { FilePondFile } from "filepond";
import { parseCSV } from "../../utils/parseCSV";
import { darkGrayBlue } from "../../utils/styles";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type UploadCsvBoxProps = {
  updateThresholdData: React.Dispatch<React.SetStateAction<ThresholdData>>;
};

export const UploadCsvBox = ({ updateThresholdData }: UploadCsvBoxProps) => {
  const handleValues = (csvRows: string[][], csvHeaders: string[]) => {
    const valuesColumnIndex = csvHeaders.indexOf("value");

    if (valuesColumnIndex === -1) {
      alert(
        "Failed to retrieve CSV values to calculate thresholds. Please upload a valid file."
      );
      return [];
    }

    const values = csvRows.map((row) => parseFloat(row[valuesColumnIndex]));
    return values || [];
  };

  const getEndpointPathFromQuery = (query: string) => {
    const match = query.match(/uri:([^}]+)/);
    const endpointPath = match ? match[1].trim() : undefined;
    return endpointPath;
  };

  const handleEndpointPath = (csvRow: string[][], csvHeaders: string[]) => {
    const queriesColumnIndex = csvHeaders.indexOf("query");

    if (queriesColumnIndex === -1) {
      console.warn("Failed to retrieve CSV queries to identify endpoint name");
      return;
    }

    const [firstRow] = csvRow;
    const [query] = firstRow;
    const endpointPath = getEndpointPathFromQuery(query);
    return endpointPath;
  };

  const handleCsvUpload = async (receivedFiles: FilePondFile[]) => {
    const [firstReceivedFile] = receivedFiles;
    const file = firstReceivedFile?.file as File;

    if (!file) return;

    try {
      const csvData = await parseCSV(file);

      if (csvData.length === 0) {
        alert("CSV is empty or invalid.");
        return;
      }

      const [csvHeaders, ...csvRows] = csvData;
      const metricValues = handleValues(csvRows, csvHeaders);
      const endpointPath = handleEndpointPath(csvRows, csvHeaders);
      updateThresholdData({
        metricValues,
        endpointPath,
      });
    } catch (error) {
      alert("Failed to parse CSV file:" + error);
    }
  };

  return (
    <section
      aria-describedby="extract-and-upload-csv-description"
      className={`flex flex-col gap-3 text-left ${darkGrayBlue.background} p-5 rounded-xl`}
    >
      <h2 className="text-2xl font-bold">CSV File Upload</h2>
      <p className="mb-5 text-lg" id="upload-csv-description">
        Upload a Datadog endpoint metrics csv file using the percentile
        aggregation to generate suggested thresholds.
      </p>
      <div aria-labelledby="upload-csv-description">
        <FilePond
          onupdatefiles={handleCsvUpload}
          onremovefile={() =>
            updateThresholdData({ metricValues: [], endpointPath: undefined })
          }
          allowMultiple={false}
          maxFiles={1}
          server={null}
          name="files"
          labelIdle="Click here or Drag & Drop a csv file to upload"
          className="custom-filepond"
        />
      </div>
    </section>
  );
};
