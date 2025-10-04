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
  describe("Default rendering", () => {
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
    it("should render number input with correct attributes", () => {
      const numberInput = screen.getByRole("spinbutton", {
        name: labels.field,
      });
      expect(numberInput).toBeInTheDocument();
      expect(numberInput).toHaveAttribute("type", "number");
      expect(numberInput).toHaveAttribute("min", limits.min.toString());
      expect(numberInput).toHaveAttribute("max", limits.max.toString());
      expect(numberInput).toHaveAttribute("value", defaultValue.toString());
    });
    it("should render low label hidden for screen readers", () => {
      const lowLabel = screen.getByText(labels.lowLabel);
      expect(lowLabel).toBeInTheDocument();
      expect(lowLabel).toHaveAttribute("aria-hidden", "true");
    });
    it("should render high label", () => {
      const highLabel = screen.getByText(labels.highLabel);
      expect(highLabel).toBeInTheDocument();
      expect(highLabel).toHaveAttribute("aria-hidden", "true");
    });
  });

  it("should render default optional labels when not provided", () => {
    render(
      <RangeConfig
        rangeFieldId={rangeFieldId}
        defaultValue={defaultValue}
        labels={{ field: labels.field }}
        limits={limits}
        updateConfigProperty={updateConfigPropertyMock}
      />
    );
    const lowLabel = screen.getByText("Lower");
    const highLabel = screen.getByText("Higher");
    expect(lowLabel).toBeInTheDocument();
    expect(highLabel).toBeInTheDocument();
  });
});
