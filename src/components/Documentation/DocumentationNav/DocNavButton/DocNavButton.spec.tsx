import { render, screen } from "@testing-library/react";
import { DocNavButton } from "./DocNavButton";
import userEvent from "@testing-library/user-event";

describe("DocNavButton", () => {
  const label = "label";
  it("should render documentation navigation button", () => {
    render(<DocNavButton onClick={jest.fn()} label={label} isOpen={true} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it("should call onClick when button is clicked", async () => {
    const onClickMock = jest.fn();
    render(<DocNavButton onClick={onClickMock} label={label} isOpen={true} />);
    const documentationButton = screen.getByRole("button", {
      name: `${label} documentation page`,
    });
    await userEvent.click(documentationButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
