import { render, screen } from "@testing-library/react";
import { Introduction } from "./Introduction";
import { BrowserRouter } from "react-router";

describe("BorderBox", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Introduction />
      </BrowserRouter>
    );
  });
  it("should render title", () => {
    expect(screen.getByText("Dynamic Threshold Generator")).toBeInTheDocument();
  });
  it("should connect title with tooltip", () => {
    expect(screen.getByText("Dynamic Threshold Generator")).toHaveAttribute(
      "aria-describedBy",
      "generator-tooltip"
    );
  });
  it.todo("should render tooltip when clicking on tooltip icon"); // find by Toggle generator explanation
  it.todo("should hide tooltip by default");
  it("should render description", () => {
    expect(
      screen.getByText(
        /Extract a Datadog endpoint metrics csv file using any percentile aggregation and upload it to generate warning and critical thresholds suggestions./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Configure the generator to define how rigorous you want the threshold suggestions to be./
      )
    ).toBeInTheDocument();
  });
});
