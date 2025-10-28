import { render, screen } from "@testing-library/react";
import { Introduction } from "./Introduction";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe("BorderBox", () => {
  const setDisplayTooltipMock = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Introduction
          setDisplayContent={setDisplayTooltipMock}
          ariaControlsIds="aria-controls-ids"
          isExpanded
        />
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
  it("should call setDisplayContent to toggle tooltip explanation when clicking on the info tooltip button", async () => {
    const tooltipButton = screen.getByText("Toggle generator explanation");

    await userEvent.click(tooltipButton); // open tooltip

    const setDisplayTooltipFunctionMock =
      setDisplayTooltipMock.mock.calls[0][0];
    const prevStateHidden = false;
    const nextStateVisible = true;
    expect(setDisplayTooltipFunctionMock(prevStateHidden)).toBe(
      nextStateVisible
    );

    await userEvent.click(tooltipButton); // close tooltip
    const prevStateVisible = true;
    const nextStateHidden = false;
    expect(setDisplayTooltipFunctionMock(prevStateVisible)).toBe(
      nextStateHidden
    );
  });
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
  it("should render button with aria-controlls received", () => {
    const tooltipButton = screen.getByRole("button", {
      name: "Toggle generator explanation",
    });
    expect(tooltipButton).toHaveAttribute("aria-controls", "aria-controls-ids");
  });
  it("should render button with aria-expanded based on props", () => {
    const tooltipButton = screen.getByRole("button", {
      name: "Toggle generator explanation",
    });
    expect(tooltipButton).toHaveAttribute("aria-expanded", "true");
  });
});
