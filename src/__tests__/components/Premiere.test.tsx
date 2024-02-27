import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Premiere } from "components/Main";

const renderUtil = () => {
  render(<Premiere />);
};

describe("Premiere component", () => {
  const { getByText, getByRole } = screen;

  it("renders Premiere text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /premieres/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(/Listen here first to organic music releases./i);
    expect(bannerText).toBeInTheDocument();
  });

  it("renders correct link to premiere page", () => {
    renderUtil();

    const link = getByRole("button", { name: /more/i });
    expect(link).toHaveAttribute("href", "/premieres");
  });
});
