import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Takeover } from "components/Main";

const post = [
  {
    slug: "slug",
    frontmatter: {
      listen: "listen",
      title: "title",
      name: "name",
      date: "date",
      pic: "/various/pb_black.png",
      path: "path",
      bio: "bio",
      postLink: "postLink",
    },
  },
];

const renderUtil = () => {
  render(<Takeover takeovers={post} />);
};

describe("Takeover component", () => {
  const { getByText, getByRole } = screen;

  it("renders Takeover text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Takeovers/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(/Artists, Friends, and Guests pick their Top Selects./i);
    expect(bannerText).toBeInTheDocument();
  });

  it("renders correct link to Takeover page", () => {
    renderUtil();

    const link = getByRole("button", { name: /more/i });
    expect(link).toHaveAttribute("href", "/takeovers");
  });

  it("renders Takeover post", () => {
    renderUtil();

    const postLink = getByRole("link", { name: /title/i });
    expect(postLink).toHaveAttribute("href", "/takeovers/slug");
  });
});
