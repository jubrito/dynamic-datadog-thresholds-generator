import { render, screen, fireEvent } from "@testing-library/react";
import { EndpointStatistics } from "./Statistics";
import userEvent from "@testing-library/user-event";

describe("EndpointStatistics", () => {
  const baseStats = {
    numberOfElements: 5,
    minimum: 1,
    maximum: 10,
    average: 5.5,
    median: 5,
    sorted: "1,2,5,7,10",
  };

  it("should visually hide everything if show insights is false", () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={false} />
    );
    const region = screen.getByLabelText("Endpoint insights");
    expect(region).toHaveClass("opacity-0");
  });

  it("should show stats when button is clicked", async () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );
    const section = screen.getByLabelText("Endpoint insights");
    expect(section).toHaveClass("opacity-100");

    const statsSection = screen
      .queryByText(/Number of values analyzed/)
      ?.closest("div");

    expect(statsSection).toHaveClass("max-h-0");
    expect(statsSection).not.toHaveAttribute("aria-expanded", "true");

    await userEvent.click(screen.getByRole("button"));

    expect(statsSection).toHaveClass("max-h-96");
    expect(statsSection).toHaveAttribute("aria-expanded", "true");
  });

  it("should hide stats when button is clicked twice", async () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );
    const section = screen.getByLabelText("Endpoint insights");
    expect(section).toHaveClass("opacity-100");

    const statsSection = screen
      .queryByText(/Number of values analyzed/)
      ?.closest("div");

    expect(statsSection).toHaveClass("max-h-0");
    expect(statsSection).not.toHaveAttribute("aria-expanded", "true");

    await userEvent.click(screen.getByRole("button"));

    expect(statsSection).toHaveClass("max-h-96");
    expect(statsSection).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(screen.getByRole("button"));

    expect(statsSection).toHaveClass("max-h-0");
    expect(statsSection).not.toHaveAttribute("aria-expanded", "true");
  });

  it("should show insufficient data note if numberOfElements < 4", () => {
    render(
      <EndpointStatistics
        endpointStats={{ ...baseStats, numberOfElements: 2 }}
        showInsights={true}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/Not enough data./)).toBeInTheDocument();
  });

  it("should render button with aria-controls for accessibility", () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-controls", "endpoint-highlights");
  });
  it.todo("should render button with aria-expanded for accessibility");
});
