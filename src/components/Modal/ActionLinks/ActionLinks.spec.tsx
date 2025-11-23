import { render, screen } from "@testing-library/react";
import { ActionLinks } from "./ActionLinks";
import { BrowserRouter } from "react-router";

describe("ActionLinks", () => {
  const internalPathToNavigate = "/path";
  const externalPathToNavigate = "www.external.com";

  describe("Primary Link", () => {
    const label = "label";

    it("should render internal primary link with path", () => {
      render(
        <BrowserRouter>
          <ActionLinks
            primaryLink={{
              pathToNavigate: internalPathToNavigate,
              label,
            }}
          />
        </BrowserRouter>
      );
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", internalPathToNavigate);
    });

    it("should render external primary anchor correctly", () => {
      render(
        <BrowserRouter>
          <ActionLinks
            primaryLink={{
              pathToNavigate: internalPathToNavigate,
              label,
              isExternalLink: true,
            }}
          />
        </BrowserRouter>
      );
      const link = screen.getByRole("anchor", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", internalPathToNavigate);
    });
  });
});
