import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { News } from "components/Main";
import { post } from "utils/testPost";

const renderUtil = () => {
  render(<News news={post} />);
};

describe("News component", () => {
  const { getByText, getByRole } = screen;

  it("renders News text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /latest news/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      /Profiling the experimental dance music world and throwing parties in between./i
    );
    expect(bannerText).toBeInTheDocument();
  });

  it("renders correct link to Instagram", () => {
    renderUtil();

    const instagramLink = getByRole("link", { name: /@plantbassdworld/i });
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/plantbassdworld");
  });

  it("renders news post", () => {
    renderUtil();

    const postLink = getByRole("link", { name: /title/i });
    expect(postLink).toHaveAttribute("href", "/path/slug");
  });
});
