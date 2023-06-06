import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import UnderTheRadarPage from "pages/under-the-radar";
import { post } from "utils/testPost";

const renderUtil = () => {
  const user = userEvent.setup();
  render(<UnderTheRadarPage radars={post} />);

  return { user };
};

describe("Under The Radar page", () => {
  const { getByText, getByRole } = screen;

  it("renders Page text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Under The Radar/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      /End of month roundups of the releases that might have flew under your radar./i
    );
    expect(bannerText).toBeInTheDocument();
  });

  it("should have a search box", async () => {
    const { user } = renderUtil();
    const searchBox = getByRole("textbox");
    await user.type(searchBox, "myValue");

    expect(searchBox).toHaveValue("myValue");
  });

  it("should have a bandcamp button", async () => {
    renderUtil();

    const link = getByRole("link", { name: "https://bandcamp.com/oisincampbellbap" });
    expect(link).toBeInTheDocument();
  });
});
