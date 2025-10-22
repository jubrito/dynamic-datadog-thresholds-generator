import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { MainTooltip } from "./MainTooltip";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("MainTooltip", () => {
  const setDisplayTooltipMock = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <MainTooltip setDisplayTooltip={setDisplayTooltipMock} />
      </MemoryRouter>
    );
  });
  it("should call setDisplayTooltip with false to close tooltip when clicking on close", async () => {
    const closeLabel = "Close explanation and go back to generator";
    await userEvent.click(screen.getByLabelText(closeLabel));
    expect(setDisplayTooltipMock).toHaveBeenCalledWith(false);
  });
  it("should render 'Why the generator can help you' section", () => {
    expect(
      screen.getByText("Why the generator can help you")
    ).toBeInTheDocument();
  });
  it("should render 'What do you need to know before you use this tool' section", () => {
    expect(
      screen.getByText("What do you need to know before you use this tool")
    ).toBeInTheDocument();
  });
  it("should render 'How to configure the generator' section", () => {
    expect(
      screen.getByText("How to configure the generator")
    ).toBeInTheDocument();
  });
});
