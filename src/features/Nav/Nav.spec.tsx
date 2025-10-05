import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Nav } from "./Nav";

jest.mock("react-router", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  NavLink: ({ to, children }: any) => {
    return <a href={to}>{children}</a>;
  },
}));

describe("Nav", () => {
  beforeEach(() => {
    render(<Nav />);
  });
  it("should render heading title", () => {
    expect(
      screen.getByRole("heading", { name: "Main Menu" })
    ).toBeInTheDocument();
  });
  it('should render link to "Generator" page', () => {
    const generatorLink = screen.getByRole("link", { name: "Generator" });
    expect(generatorLink).toBeInTheDocument();
    expect(generatorLink).toHaveAttribute("href", "/");
  });
});
