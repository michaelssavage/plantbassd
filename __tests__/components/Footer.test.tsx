import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "components/Footer";

const renderUtil = () => {
  render(<Footer />);
};

describe("Footer component", () => {
  it("should have an instagram link", () => {
    renderUtil();
    expect(screen.getByRole("link", { name: "Michael." })).toHaveAttribute(
      "href",
      "https://www.instagram.com/michaelsaverage"
    );
  });
});
