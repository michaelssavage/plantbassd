import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "components/Footer";

const renderUtil = () => {
  render(<Footer />);
};

describe("Footer component", () => {
  const { getByText, getByRole } = screen;

  it("renders Footer text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Plant Bass'd/i });
    expect(headerText).toBeInTheDocument();

    const footerText = getByText(
      /Profiling the experimental dance music world & throwing parties in between./i
    );
    expect(footerText).toBeInTheDocument();
  });
});
