import { screen } from "@testing-library/dom";
import { ConfigOptions } from "./ConfigOptions";
import { render } from "@testing-library/react";

describe("ConfigOptions", () => {
  const thresholdType = "Critical";
  const defaultPercentile = 95;
  const defaultFactor = 10;
  const mockUpdateConfig = jest.fn();

  render(
    <ConfigOptions
      thresholdType={thresholdType}
      defaultPercentile={defaultPercentile}
      defaultFactor={defaultFactor}
      updateConfig={mockUpdateConfig}
    />
  );
  it("should render threshold type field", () => {
    const thresholdTypeField = screen.getByText(`${thresholdType} Threshold`);
    expect(thresholdTypeField).toBeInTheDocument();
    expect(thresholdTypeField.id).toBe("threshold-type-id");
  });
});
