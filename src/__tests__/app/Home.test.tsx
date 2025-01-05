import { screen } from "@testing-library/react";

import Home from "@/app/page";

import { render } from "../../../custom-render";

test("Home component", () => {
  render(<Home />);

  const title = screen.getByText("This is the home page content.");
  expect(title).toBeInTheDocument();
});
