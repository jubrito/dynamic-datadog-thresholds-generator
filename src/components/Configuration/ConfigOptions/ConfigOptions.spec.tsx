import { screen, within } from "@testing-library/dom";
import { ConfigOptions } from "./ConfigOptions";
import { render } from "@testing-library/react";

describe("ConfigOptions", () => {
  const thresholdType = "Critical";
  const defaultPercentile = 95;
  const defaultFactor = 10;
  const mockUpdateConfig = jest.fn();

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
    const thresholdTypeField = screen.getByText(`${thresholdType} Threshold`);
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
      `${thresholdType} Threshold configuration`
    );
    const basePercentileField =
      within(rangeConfigWrapper).getByLabelText("Base percentile");
    expect(basePercentileField).toBeInTheDocument();
  });
  //   it("should have a div with aria-labelledby attribute pointing to the threshold type field id", () => {
  //     const divElement = screen.getByRole("region", {
  //       name: `${thresholdType} Threshold`,
  //     });
  //     expect(divElement).toBeInTheDocument();
  //     expect(divElement).toHaveAttribute("aria-labelledby", "threshold-type-id");
  //   });
});
