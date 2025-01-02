import Home from "@/app/page";
import { screen } from "@testing-library/react";
import { render } from "../../../custom-render";

test("Home component", () => {
  render(<Home />);

  const title = screen.getByText("Hello main");
  expect(title).toBeInTheDocument();
});
