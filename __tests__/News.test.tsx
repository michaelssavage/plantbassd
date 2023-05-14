import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { News } from "components/Main";

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
  render(<News news={post} />);
};

describe("News component", () => {
  const { getByText, getByRole } = screen;

  it("renders News text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /latest news/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      /Catch the latest about new music, upcoming gigs & events, and more./i
    );
    expect(bannerText).toBeInTheDocument();
  });

  it("renders correct link to Instagram", () => {
    renderUtil();

    const instagramLink = getByRole("link", { name: /@plantbassd___/i });
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/plantbassd___");
  });

  it("renders news post", () => {
    renderUtil();

    const postLink = getByRole("link", { name: /title/i });
    expect(postLink).toHaveAttribute("href", "/path/slug");
  });
});
