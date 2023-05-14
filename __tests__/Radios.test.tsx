import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Radio } from "components/Main";

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
  render(<Radio radios={post} />);
};

describe("Radio component", () => {
  const { getByText, getByRole } = screen;

  it("renders Radio text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Radios/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(/Crisp Guest Mixes For Our Radio Series./i);
    expect(bannerText).toBeInTheDocument();
  });

  it("renders correct link to Radio page", () => {
    renderUtil();

    const link = getByRole("button", { name: /more/i });
    expect(link).toHaveAttribute("href", "/radios");
  });

  it("renders Radio post", () => {
    renderUtil();

    const postLink = getByRole("link", { name: /title/i });
    expect(postLink).toHaveAttribute("href", "/radios/slug");
  });
});
