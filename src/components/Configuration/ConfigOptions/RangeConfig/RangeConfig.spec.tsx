import { screen } from "@testing-library/dom";
import { RangeConfig } from "./RangeConfig";
import { render } from "@testing-library/react";

describe("RangeConfig", () => {
  const updateConfigPropertyMock = jest.fn();
  const rangeFieldId = "rangeFieldId";
  const labels = {
    field: "fieldLabel",
    rangeBarLabel: "rangeBarLabel",
    lowLabel: "lowLabel",
    highLabel: "highLabel",
  };
  const defaultValue = 37;
  const limits = {
    min: 0,
    max: 101,
  };
  beforeEach(() => {
    render(
      <RangeConfig
        rangeFieldId={rangeFieldId}
        defaultValue={defaultValue}
        labels={labels}
        limits={limits}
        updateConfigProperty={updateConfigPropertyMock}
      />
    );
  });
  it("should render label for range field", () => {
    const labelField = screen.getByText(labels.field);
    expect(labelField).toBeInTheDocument();
    expect(labelField).toHaveAttribute("for", rangeFieldId);
  });
});
