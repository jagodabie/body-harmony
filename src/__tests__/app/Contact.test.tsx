import { screen } from "@testing-library/react";

import Contact from "@/app/contact/page";

import { render } from "../../../custom-render";

it("Contact component", () => {
  render(<Contact />);

  const title = screen.getByText("Hello contact");
  expect(title).toBeInTheDocument();
});
