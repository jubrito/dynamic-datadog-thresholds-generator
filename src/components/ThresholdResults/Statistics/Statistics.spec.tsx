import { render, screen, waitFor } from "@testing-library/react";
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

  it("should visually hide statistics if show insights is false", () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={false} />
    );
    const region = screen.getByRole("button").closest("div");
    expect(region).toHaveClass("opacity-0");
  });

  it("should show stats when show button is clicked", async () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );

    const section = screen.getByRole("button").closest("div");
    expect(section).toHaveClass("opacity-100");

    await userEvent.click(
      screen.getByRole("button", { name: /Show endpoint insights/i })
    );

    const statsSection = screen.getByLabelText("Endpoint insights");

    await waitFor(() => {
      expect(statsSection).toHaveClass("max-h-96");
    });
  });

  it("should hide stats when hide button is clicked twice", async () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );
    const section = screen.getByRole("button").closest("div");
    expect(section).toHaveClass("opacity-100");

    await userEvent.click(
      screen.getByRole("button", { name: /Show endpoint insights/i })
    );
    const statsSection = screen.getByLabelText("Endpoint insights");

    await waitFor(() => {
      expect(statsSection).toHaveClass("max-h-96");
    });

    await userEvent.click(
      screen.getByRole("button", { name: /Hide endpoint insights/i })
    );

    expect(statsSection).toHaveClass("max-h-0");
    expect(statsSection).not.toHaveAttribute("aria-expanded", "true");
  });

  it("should show insufficient data note if numberOfElements < 4", async () => {
    const notEnoughStats = {
      numberOfElements: 1,
      minimum: 1,
      maximum: 1,
      average: 1,
      median: 1,
      sorted: "1",
    };
    render(
      <EndpointStatistics endpointStats={notEnoughStats} showInsights={true} />
    );
    await userEvent.click(screen.getByLabelText(/Show endpoint insights/));
    expect(screen.getByText(/Not enough data/)).toBeInTheDocument();
  });

  it("should render button with aria-controls for accessibility", () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-controls", "endpoint-highlights");
  });

  it("should render button with aria-expanded for accessibility", async () => {
    render(
      <EndpointStatistics endpointStats={baseStats} showInsights={true} />
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(screen.getByLabelText(/Show endpoint insights/));

    expect(btn).toHaveAttribute("aria-expanded", "true");
  });
});
