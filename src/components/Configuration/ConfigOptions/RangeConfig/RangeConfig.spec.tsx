import { screen } from "@testing-library/dom";
import { RangeConfig } from "./RangeConfig";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  const inputNumberLabel = `The ${labels.field.toLowerCase()} value represents the ${labels.rangeBarLabel.toLowerCase()}. A lower value means '${labels.lowLabel.toLowerCase()}' and a higher value means '${labels.highLabel.toLowerCase()}'`;

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

    it("should render number input with label and correct attributes", () => {
      const rangeInput = screen.getByRole("slider", {
        name: `Increase or decrease the ${labels.field.toLowerCase()} value`,
      });
      expect(rangeInput).toBeInTheDocument();
      expect(rangeInput).toHaveAttribute("type", "range");
      expect(rangeInput).toHaveAttribute("min", limits.min.toString());
      expect(rangeInput).toHaveAttribute("max", limits.max.toString());
      expect(rangeInput).toHaveAttribute("value", defaultValue.toString());
    });
    it("should render input range field number input with correct attributes", () => {
      const numberInput = screen.getByRole("spinbutton", {
        name: inputNumberLabel,
      });
      expect(numberInput).toBeInTheDocument();
      expect(numberInput).toHaveAttribute("type", "number");
      expect(numberInput).toHaveAttribute("min", limits.min.toString());
      expect(numberInput).toHaveAttribute("max", limits.max.toString());
      expect(numberInput).toHaveAttribute("value", defaultValue.toString());
    });
    it("should call range change handler on number input change", async () => {
      const numberInput = screen.getByRole("spinbutton", {
        name: inputNumberLabel,
      });
      await userEvent.type(numberInput, "1");
      expect(updateConfigPropertyMock).toHaveBeenCalledWith(
        parseInt(`${defaultValue}${1}`)
      );
    });
    it("should call range change handler on number input change", async () => {
      const numberInput = screen.getByRole("spinbutton", {
        name: inputNumberLabel,
      });
      await userEvent.type(numberInput, "1");
      expect(updateConfigPropertyMock).toHaveBeenCalledWith(
        parseInt(`${defaultValue}${1}`)
      );
    });
    it("should render low label and hide it from screen readers", () => {
      const lowLabel = screen.getByText(labels.lowLabel);
      expect(lowLabel).toBeInTheDocument();
      expect(lowLabel).toHaveAttribute("aria-hidden", "true");
    });
    it("should render high label and hide it from screen readers", () => {
      const highLabel = screen.getByText(labels.highLabel);
      expect(highLabel).toBeInTheDocument();
      expect(highLabel).toHaveAttribute("aria-hidden", "true");
    });
    it("should render range bar label and hide it from screen readers", () => {
      const rangeBarLabel = screen.getByText(labels.rangeBarLabel);
      expect(rangeBarLabel).toBeInTheDocument();
      expect(rangeBarLabel).toHaveAttribute("aria-hidden", "true");
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
