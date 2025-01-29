import { screen } from "@testing-library/react";

import Home from "@/app/page";

import { render } from "../../../custom-render";

describe("Home component", () => {
  it("Home component renders correctly", () => {
    render(<Home />);

    const title = screen.getByText("This is the home page content.");
    expect(title).toBeInTheDocument();
  });
});
