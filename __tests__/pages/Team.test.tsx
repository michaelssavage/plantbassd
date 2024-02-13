import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TeamPage from "pages/team";

const renderUtil = () => {
  const user = userEvent.setup();
  render(<TeamPage />);

  return { user };
};

describe("Team page", () => {
  const { getByText, getByRole, getAllByRole } = screen;

  it("renders Page text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Our Team/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      "The trio work closely together online to highlight underground music in the 'Under The Radar' series each month, premiere up and coming artists on SoundCloud, and write about interests ranging from festivals, forward-thinking labels, and movements."
    );
    expect(bannerText).toBeInTheDocument();
  });

  it("should have 3 photos of the team", () => {
    renderUtil();
    const images = getAllByRole("img").filter((img) => img.tagName.toLowerCase() !== "svg");
    expect(images.length).toBe(3);
  });

  it("should have 6 svg icons", () => {
    renderUtil();
    const svgs = getAllByRole("link").filter((link) => link.className === "iconBox");
    expect(svgs.length).toBe(6);

    const facebook = svgs[0];
    expect(facebook).toHaveAttribute("href", "https://www.facebook.com/plantbassddjs");

    const instagram = svgs[1];
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/plantbassdworldld");

    const email = svgs[2];
    expect(email).toHaveAttribute("href", "mailto: plantbassdworld@gmail.com");

    const spotify = svgs[3];
    expect(spotify).toHaveAttribute("href", "https://ra.co/promoters/103854");

    const soundcloud = svgs[4];
    expect(soundcloud).toHaveAttribute("href", "https://soundcloud.com/plantbassdworld");

    const bandcamp = svgs[5];
    expect(bandcamp).toHaveAttribute("href", "https://bandcamp.com/oisincampbellbap");
  });
});
