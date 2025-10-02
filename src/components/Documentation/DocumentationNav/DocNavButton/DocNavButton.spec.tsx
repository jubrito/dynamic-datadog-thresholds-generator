import { render, screen } from "@testing-library/react";
import { DocNavButton } from "./DocNavButton";
import userEvent from "@testing-library/user-event";

describe("DocNavButton", () => {
  const label = "label";
  it("should render documentation navigation button", () => {
    render(<DocNavButton onClick={jest.fn()} label={label} isOpen={true} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
