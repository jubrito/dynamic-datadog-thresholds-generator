import { render, screen } from "@testing-library/react";
import { WithTooltip } from "./WithTooltip";
import userEvent from "@testing-library/user-event";

describe("WithTooltip", () => {
  it("should display and hide tooltip with displayTooltip value when clicking on trigger", async () => {
    render(
      <WithTooltip
        contentComponent={(_, displayTooltip) => (
          <button>Tooltip Display tooltip: {String(displayTooltip)}</button>
        )}
        triggerComponent={(setDisplayTooltip) => (
          <button onClick={() => setDisplayTooltip((prevState) => !prevState)}>
            Trigger Display tooltip
          </button>
        )}
      />
    );
    const tooltipDisplay = screen.queryByRole("button", {
      name: "Tooltip Display tooltip: false",
    });
    const trigger = screen.getByRole("button", {
      name: "Trigger Display tooltip",
    });
    expect(tooltipDisplay).not.toBeInTheDocument();

    await userEvent.click(trigger);

    const tooltipHide = screen.getByRole("button", {
      name: "Tooltip Display tooltip: true",
    });
    expect(tooltipHide).toBeInTheDocument();
  });
});
