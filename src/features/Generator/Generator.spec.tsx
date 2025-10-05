import { render, screen } from "@testing-library/react";
import { Generator } from "./Generator";

jest.mock("filepond/dist/filepond.min.css", () => ({}), { virtual: true });
jest.mock(
  "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css",
  () => ({}),
  { virtual: true }
);

describe("Generator", () => {
  beforeEach(() => {
    render(<Generator />);
  });

  it("should render introduction section", () => {
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Dynamic Threshold Generator",
      })
    ).toBeInTheDocument();
  });
  it("should CSV file upload section", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "CSV File Upload",
      })
    ).toBeInTheDocument();
  });
});
