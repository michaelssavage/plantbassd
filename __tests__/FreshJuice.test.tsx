import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FreshJuice } from "components/Main";
import { post } from "utils/testPost";

const renderUtil = () => {
  render(<FreshJuice freshjuice={post} />);
};

describe("Fresh Juice component", () => {
  const { getByText, getByRole } = screen;

  it("renders Fresh Juice text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Fresh Juice/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(/Exploring New Music Releases From Around The World./i);
    expect(bannerText).toBeInTheDocument();
  });

  it("renders correct link to fresh juice page", () => {
    renderUtil();

    const link = getByRole("button", { name: /more/i });
    expect(link).toHaveAttribute("href", "/fresh-juice");
  });

  it("renders fresh juice post", () => {
    renderUtil();

    const postLink = getByRole("link", { name: /title/i });
    expect(postLink).toHaveAttribute("href", "/fresh-juice/slug");
  });
});
