import { render, screen } from "@testing-library/react";
import { DynamicVisibility } from "./WithTooltip";
import userEvent from "@testing-library/user-event";

describe("WithTooltip", () => {
  it("should display and hide tooltip with displayContent value when clicking on trigger", async () => {
    render(
      <DynamicVisibility
        contentComponent={(_, displayContent) => (
          <button>Tooltip Display tooltip: {String(displayContent)}</button>
        )}
        triggerComponent={(setDisplayContent) => (
          <button onClick={() => setDisplayContent((prevState) => !prevState)}>
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
