import { render, screen } from "@testing-library/react";
import { Gigs } from "components/Main";
import "@testing-library/jest-dom";
import { gigPost } from "utils/testPost";

const renderUtil = () => {
  render(<Gigs gigs={gigPost} />);
};

describe("Gigs component", () => {
  const { getByText, getByRole } = screen;

  it("renders Gigs text", () => {
    renderUtil();

    const headerText = getByRole("heading", { name: /Gigs/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      /Plant Bass'd has gathered friends far and near for sweaty dancefloor parties, serving up the hottest club sounds of ballroom, US club, electro, ghetto tech, footwork, techno & more on in Glasgow, Edinburgh, and Galway./i
    );

    expect(bannerText).toBeInTheDocument();
  });

  it("should render two images", () => {
    renderUtil();

    const picture1 = getByRole("img", { name: /black picture 1/i });
    expect(picture1).toBeInTheDocument();

    const picture2 = getByRole("img", { name: /white picture 2/i });
    expect(picture2).toBeInTheDocument();
  });
});
