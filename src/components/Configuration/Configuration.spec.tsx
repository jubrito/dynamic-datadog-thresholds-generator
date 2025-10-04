import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Configuration } from "./Configuration";

describe("Configuration", () => {
  const configurationLabelId = "configuration-label-id";
  const updateThresholdsConfigMock = jest.fn();
  const thresholdsConfig = {
    warning: {
      percentile: 11,
      factor: 111,
    },
    critical: {
      percentile: 66,
      factor: 666,
    },
  };

  beforeEach(() => {
    render(
      <Configuration
        thresholdsConfig={thresholdsConfig}
        updateThresholdsConfig={updateThresholdsConfigMock}
      />
    );
  });
  it("should render config section with aria-labelledby attribute matching the id of the heading", () => {
    const configurationSection = screen.getByRole("region", {
      name: "Generator configuration",
    });
    expect(configurationSection).toBeInTheDocument();
    expect(configurationSection).toHaveAttribute(
      "aria-labelledby",
      configurationLabelId
    );
  });
  it("should render config section with aria-describedby attribute matching the id of the introduction's description of the config section", () => {
    const configurationSection = screen.getByRole("region", {
      name: "Generator configuration",
    });
    expect(configurationSection).toBeInTheDocument();
    expect(configurationSection).toHaveAttribute(
      "aria-describedby",
      "configure-generator-description-id"
    );
  });
  it("should render generator configuration heading with id", () => {
    const heading = screen.getByRole("heading", {
      name: "Generator configuration",
      level: 2,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Generator configuration");
    expect(heading).toHaveAttribute("id", configurationLabelId);
  });
});
