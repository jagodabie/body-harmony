import { screen } from "@testing-library/react";

import { Footer } from "@/components/Footer/Footer";

import { render } from "../../../custom-render";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />);
    const text = screen.getByText("© 2025 All rights reserved");

    expect(text).toBeInTheDocument();
  });
});
