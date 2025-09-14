import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import type { ThresholdData } from "../../types/types";
import type { FilePondFile } from "filepond";
import { parseCSV } from "../../utils/parseCSV";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type UploadCsvBoxProps = {
  setThresholdData: React.Dispatch<React.SetStateAction<ThresholdData>>;
};

export const UploadCsvBox = ({ setThresholdData }: UploadCsvBoxProps) => {
  const handleValues = (csvRows: string[][], csvHeaders: string[]) => {
    const valuesColumnIndex = csvHeaders.indexOf("value");

    if (valuesColumnIndex === -1) {
      alert("Failed to retrieve CSV values to calculate thresholds");
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
      alert("Failed to retrieve CSV queries to identify endpoint name");
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
      setThresholdData({
        metricValues,
        endpointPath,
      });
    } catch (error) {
      alert("Failed to parse CSV file:" + error);
    }
  };

  return (
    <>
      <h3 className="text-lg">Upload Datadog Metrics csv file</h3>
      <FilePond
        onupdatefiles={handleCsvUpload}
        onremovefile={() =>
          setThresholdData({ metricValues: [], endpointPath: undefined })
        }
        allowMultiple={false}
        maxFiles={1}
        server={null}
        name="files"
        labelIdle="Click here or Drag & Drop a csv file to upload"
      />
    </>
  );
};
