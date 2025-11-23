import { render, screen } from "@testing-library/react";
import { UploadCsvBox } from "./UploadCsvBox";

jest.mock("filepond/dist/filepond.min.css", () => ({}), { virtual: true });
jest.mock(
  "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css",
  () => ({}),
  { virtual: true }
);

describe("UploadCsvBox", () => {
  const updateThresholdDataMock = jest.fn();
  const setFileUploadFailedMock = jest.fn();
  beforeEach(() => {
    render(
      <UploadCsvBox
        updateThresholdData={updateThresholdDataMock}
        setFileUploadFailed={setFileUploadFailedMock}
      />
    );
  });

  it("should render section described by introduction description", () => {
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute(
      "aria-describedby",
      "extract-and-upload-csv-description"
    );
  });
  it("should render heading", () => {
    const heading = screen.getByRole("heading", {
      name: "CSV file upload",
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });
  it("should render description", () => {
    const description = screen.getByText(
      "Upload a Datadog endpoint metrics csv file using the percentile aggregation to generate thresholds."
    );
    expect(description).toBeInTheDocument();
  });
  it.todo(
    "should set file upload failed and clear file when no file is provided"
  );
  it.todo("should set file upload failed and clear file  when upload fails");
  it.todo(
    "should set file upload failed and clear file when file upload is not csv"
  );
});
