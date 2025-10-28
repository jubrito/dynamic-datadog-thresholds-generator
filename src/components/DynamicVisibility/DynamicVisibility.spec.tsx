import { render, screen } from "@testing-library/react";
import { DynamicVisibility } from "./DynamicVisibility";
import userEvent from "@testing-library/user-event";

describe("DynamicVisibility", () => {
  beforeEach(() => {
    render(
      <DynamicVisibility
        contentComponent={(_, displayContent) => (
          <button>Tooltip Display tooltip: {String(displayContent)}</button>
        )}
        triggerComponent={(setDisplayContent, _, ariaControlsIds) => (
          <button
            aria-controls={ariaControlsIds}
            onClick={() => setDisplayContent((prevState) => !prevState)}
          >
            Trigger Display tooltip
          </button>
        )}
        toHideComponent={() => <span>Component to hide</span>}
      />
    );
  });
  it("should display and hide tooltip with displayContent value when clicking on trigger", async () => {
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
  it("should hide component to hide when displayContent is true", async () => {
    expect(screen.queryByText("Component to hide")).toBeInTheDocument();

    const trigger = screen.getByRole("button", {
      name: "Trigger Display tooltip",
    });

    await userEvent.click(trigger);

    expect(screen.queryByText("Component to hide")).not.toBeVisible();
  });
  it("should render button with aria controls pointing to elements it is controlling", () => {
    const triggerComponent = screen.getByRole("button");
    expect(triggerComponent).toHaveAttribute(
      "aria-controls",
      "content-component-id to-hide-component-id"
    );
  });
});
