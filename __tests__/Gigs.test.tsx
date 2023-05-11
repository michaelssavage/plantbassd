import { render, screen } from "@testing-library/react";
import { Gigs } from "components/Main";
import "@testing-library/jest-dom";

const renderUtil = () => {
  render(<Gigs />);
};

describe("Gigs component", () => {
  const { getByText, getByRole } = screen;

  it("renders Gigs text", () => {
    renderUtil();

    const headerText = getByRole("heading", { name: /Gigs/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      /Serving up the hot club sounds of ballroom, US club, electro, ghetto tech, footwork, techno & more on in Glasgow, Edinburgh, and Dublin, Plant Bass'd has gathered friends far and near for sweaty dancefloor parties./i
    );

    expect(bannerText).toBeInTheDocument();
  });

  it("should render two images", () => {
    renderUtil();

    const mellGImg = getByRole("img", { name: /DJ Mell G gig poster/i });
    expect(mellGImg).toBeInTheDocument();

    const kesslerImg = getByRole("img", { name: /Kessler gig poster/i });
    expect(kesslerImg).toBeInTheDocument();
  });
});
