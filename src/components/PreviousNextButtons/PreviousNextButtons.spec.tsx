import { render, screen } from "@testing-library/react";
import { PreviousNextButtons } from "./PreviousNextButtons";

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
    expect(screen.getByText(nextLabel)).toBeInTheDocument();
    expect(screen.getByText(previousLabel)).toBeInTheDocument();
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
