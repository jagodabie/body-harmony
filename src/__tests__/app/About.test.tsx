import { screen } from "@testing-library/react";

import About from "@/app/about/page";

import { render } from "../../../custom-render";

it("About component", () => {
  render(<About />);

  const title = screen.getByText("Hello about");
  expect(title).toBeInTheDocument();
});
