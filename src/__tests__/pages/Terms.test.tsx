import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import PrivacyPolicy from "pages/terms-and-conditions";

const renderUtil = () => {
  const user = userEvent.setup();
  render(<PrivacyPolicy />);

  return { user };
};

describe("Terms and Conditions page", () => {
  const { getByText, getByRole } = screen;

  it("renders Page text", () => {
    renderUtil();
    const headerText = getByRole("heading", { name: /Terms and Conditions/i });
    expect(headerText).toBeInTheDocument();

    const bannerText = getByText(/Welcome to Plant Bass'd!/i);
    expect(bannerText).toBeInTheDocument();
  });
});
