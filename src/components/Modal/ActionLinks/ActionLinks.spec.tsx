import { render, screen } from "@testing-library/react";
import { ActionLinks } from "./ActionLinks";
import { BrowserRouter } from "react-router";

describe("ActionLinks", () => {
  const internalPathToNavigate = "/path";
  const externalPathToNavigate = "www.external.com";

  describe("Primary Link", () => {
    it("should render internal primary link with path", () => {
      const label = "label";
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

    it.skip("should render external primary link correctly", () => {
      // Test implementation for external primary link
    });
  });
});
