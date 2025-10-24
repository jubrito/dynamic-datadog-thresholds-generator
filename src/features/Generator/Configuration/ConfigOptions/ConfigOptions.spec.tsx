import { screen, within } from "@testing-library/dom";
import { ConfigOptions } from "./ConfigOptions";
import { render } from "@testing-library/react";

describe("ConfigOptions", () => {
  const thresholdType = "Critical";
  const defaultPercentile = 95;
  const defaultFactor = 10;
  const mockUpdateConfig = jest.fn();
  const thresholdTypeLabel = `${thresholdType} Threshold`;

  beforeEach(() => {
    render(
      <ConfigOptions
        thresholdType={thresholdType}
        defaultPercentile={defaultPercentile}
        defaultFactor={defaultFactor}
        updateConfig={mockUpdateConfig}
      />
    );
  });

  it("should render threshold type field and hide it from screen readers", () => {
    const thresholdTypeField = screen.getByText(thresholdTypeLabel);
    expect(thresholdTypeField).toBeInTheDocument();
    expect(thresholdTypeField).toHaveAttribute("aria-hidden", "true");
  });
  it("should render range config wrapper", () => {
    const rangeConfigWrapper = screen.getByLabelText(
      `${thresholdType} Threshold configuration`
    );
    expect(rangeConfigWrapper).toBeInTheDocument();
  });
  it("should render base percentile range config", () => {
    const rangeConfigWrapper = screen.getByLabelText(
      `${thresholdTypeLabel} configuration`
    );
    const basePercentileField =
      within(rangeConfigWrapper).getByLabelText("Base percentile");
    expect(basePercentileField).toBeInTheDocument();
  });
  it("should render rigorour factor range config", () => {
    const rangeConfigWrapper = screen.getByLabelText(
      `${thresholdTypeLabel} configuration`
    );
    const basePercentileField =
      within(rangeConfigWrapper).getByLabelText("Rigorour factor");
    expect(basePercentileField).toBeInTheDocument();
  });
});
