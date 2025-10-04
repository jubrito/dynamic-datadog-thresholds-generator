import { render, screen } from "@testing-library/react";
import { UploadCsvBox } from "./UploadCsvBox";

jest.mock("filepond-plugin-image-exif-orientation", () => ({}));
jest.mock("filepond-plugin-image-preview", () => ({}));
jest.mock("filepond/dist/filepond.min.css", () => ({}));
jest.mock(
  "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css",
  () => ({})
);

describe("UploadCsvBox", () => {
  const updateThresholdDataMock = jest.fn();
  beforeEach(() => {
    render(<UploadCsvBox updateThresholdData={updateThresholdDataMock} />);
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
      name: "CSV File Upload",
      level: 2,
    });
    expect(heading).toBeInTheDocument();
    //   const filePond = screen.getByRole('button', { name: /Add files/i });
    //   expect(filePond).toBeInTheDocument();
  });
  it("should render description", () => {
    const description = screen.getByText(
      "Upload a Datadog endpoint metrics csv file using the percentile aggregation to generate suggested thresholds."
    );
    expect(description).toBeInTheDocument();
  });
});
