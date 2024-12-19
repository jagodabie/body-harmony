import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

test("Home component", () => {
  render(<Home />);
  //  debug method from react testing library
  screen.debug();

  const title = screen.getByText("Hello main");
  expect(title).toBeInTheDocument();
});
