import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import type { ThresholdData } from "../../../types/generator";
import type { FilePondFile } from "filepond";
import { parseCSV } from "../../../utils/parseCSV";
import { stylesDarkGrayBlue } from "../../../utils/styles";
import { extractAndUploadCsvDescriptionId } from "../../../components/Introduction/Introduction";
import React from "react";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type UploadCsvBoxProps = {
  updateThresholdData: React.Dispatch<React.SetStateAction<ThresholdData>>;
  setFileUploadFailed: React.Dispatch<React.SetStateAction<boolean>>;
};

const uploadCsvDescriptionId = "upload-csv-description-id";

export const UploadCsvBox = ({
  updateThresholdData,
  setFileUploadFailed,
}: UploadCsvBoxProps) => {
  const filePondRef = React.useRef<FilePond>(null);

  const clearFile = (receivedFile: FilePondFile) => {
    filePondRef.current?.removeFile(receivedFile?.id ?? receivedFile?.file);
  };

  const handleValues = (csvRows: string[][], csvHeaders: string[]) => {
    const valuesColumnIndex = csvHeaders.indexOf("value");

    if (valuesColumnIndex < 0) {
      setFileUploadFailed(true);
      console.error("Failed to retrieve CSV values to calculate thresholds.");
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

  const handleEndpointPath = (
    csvRow: string[][],
    csvHeaders: string[],
    file: FilePondFile
  ) => {
    const queriesColumnIndex = csvHeaders.indexOf("query");

    if (queriesColumnIndex === -1) {
      setFileUploadFailed(true);
      clearFile(file);
      console.error("Failed to retrieve CSV queries to identify endpoint name");
      return;
    }

    const [firstRow] = csvRow;
    const [query] = firstRow;
    const endpointPath = getEndpointPathFromQuery(query);
    return endpointPath;
  };

  const handleCsvUpload = async (receivedFiles: FilePondFile[]) => {
    const [firstReceivedFile] = receivedFiles;
    const filepondFile = firstReceivedFile;

    if (!filepondFile) {
      setFileUploadFailed(true);
      clearFile(filepondFile);
      return;
    }

    try {
      const csvData = await parseCSV(filepondFile.file as File);

      if (csvData.length === 0) {
        setFileUploadFailed(true);
        clearFile(filepondFile);
        console.error("CSV is empty or invalid.");
        return;
      }

      const [csvHeaders, ...csvRows] = csvData;
      const metricValues = handleValues(csvRows, csvHeaders);
      const endpointPath = handleEndpointPath(
        csvRows,
        csvHeaders,
        filepondFile
      );
      updateThresholdData({
        metricValues,
        endpointPath,
      });
    } catch (error) {
      setFileUploadFailed(true);
      console.error("Failed to parse CSV file:" + error);
    }
  };

  return (
    <section
      aria-describedby={extractAndUploadCsvDescriptionId}
      className={`flex flex-col gap-3 text-left ${stylesDarkGrayBlue.background} p-5 rounded-xl`}
      role="region"
    >
      <h2 className="text-2xl font-bold">CSV file upload</h2>
      <p className="mb-5 text-lg" id={uploadCsvDescriptionId}>
        Upload a Datadog endpoint metrics csv file using the percentile
        aggregation to generate suggested thresholds.
      </p>
      <div aria-labelledby={uploadCsvDescriptionId}>
        <FilePond
          acceptedFileTypes={[".csv", "text/csv"]}
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
          ref={filePondRef}
        />
      </div>
    </section>
  );
};
