import { render, screen } from "@testing-library/react";
import { Banner } from "components/Banner";
import "@testing-library/jest-dom";

describe("Banner component", () => {
  const { getByText, getByRole } = screen;

  it("renders Banner text", () => {
    render(<Banner />);

    const headerText = getByRole("heading", { name: /plant bass'd/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(
      /Profiling the experimental dance music world and throwing parties in between./i
    );

    expect(bannerText).toBeInTheDocument();
  });
});
