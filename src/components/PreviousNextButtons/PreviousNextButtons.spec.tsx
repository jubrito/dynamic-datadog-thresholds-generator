import { render, screen } from "@testing-library/react";
import { PreviousNextButtons } from "./PreviousNextButtons";
import userEvent from "@testing-library/user-event";

describe("PreviousNextButtons", () => {
  const nextActionMock = jest.fn();
  const nextLabel = "Next";
  const previousLabel = "Previous";
  const previousActionMock = jest.fn();
  it("should render previous and next buttons when props are provided", () => {
    render(
      <PreviousNextButtons
        next={{ action: nextActionMock, label: nextLabel }}
        previous={{ action: previousActionMock, label: previousLabel }}
      />
    );
    expect(screen.getByText(`Next: ${nextLabel}`)).toBeInTheDocument();
    expect(screen.getByText(`Previous: ${previousLabel}`)).toBeInTheDocument();
  });

  it("should render previous and next buttons with aria label", async () => {
    render(
      <PreviousNextButtons
        next={{ action: nextActionMock, label: nextLabel }}
        previous={{ action: previousActionMock, label: previousLabel }}
      />
    );

    await userEvent.click(screen.getByText(`Next: ${nextLabel}`));
    await userEvent.click(screen.getByText(`Previous: ${previousLabel}`));

    expect(
      screen.getByLabelText(`Next page: ${nextLabel}`)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(`Previous page: ${previousLabel}`)
    ).toBeInTheDocument();
  });

  it("should call previous and next buttons when props are provided", () => {
    render(
      <PreviousNextButtons
        next={{ action: nextActionMock, label: nextLabel }}
        previous={{ action: previousActionMock, label: previousLabel }}
      />
    );
    expect(nextActionMock).toHaveBeenCalledTimes(1);
    expect(previousActionMock).toHaveBeenCalledTimes(1);
  });
});
