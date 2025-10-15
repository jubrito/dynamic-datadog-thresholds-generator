import { render, screen } from "@testing-library/react";
import { Generator } from "./Generator";
import { BrowserRouter } from "react-router";

jest.mock("filepond/dist/filepond.min.css", () => ({}), { virtual: true });
jest.mock(
  "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css",
  () => ({}),
  { virtual: true }
);

describe("Generator", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Generator />
      </BrowserRouter>
    );
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
        name: "CSV file upload",
      })
    ).toBeInTheDocument();
  });
  it("should render configuration section", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Generator configuration",
      })
    ).toBeInTheDocument();
  });
});
