import { logRoles, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { HamburgerMenu } from "@/components/Navbar/components/HamburgerMenu/HamburgerMenu";

import { render } from "../../../../custom-render";

describe("HamburgerMenu Component", () => {
  const toggleMenuMock = jest.fn();

  it("renders MenuIcon when isOpen is false", () => {
    render(<HamburgerMenu isOpen={false} toggleMenu={toggleMenuMock} />);

    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
    expect(screen.queryByLabelText("Close menu")).not.toBeInTheDocument();
  });

  it("renders CloseIcon when isOpen is true", () => {
    render(<HamburgerMenu isOpen={true} toggleMenu={toggleMenuMock} />);

    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
    expect(screen.queryByLabelText("Open menu")).not.toBeInTheDocument();
  });

  it("calls toggleMenu when clicked", async () => {
    render(<HamburgerMenu isOpen={false} toggleMenu={toggleMenuMock} />);

    const menuButton = screen.getByRole("menu");

    await userEvent.click(menuButton);

    expect(toggleMenuMock).toHaveBeenCalledTimes(1);
  });

  it("aria label is equal Close menu when isOpen  equal to true.", () => {
    const { container } = render(
      <HamburgerMenu isOpen={true} toggleMenu={toggleMenuMock} />
    );
    logRoles(container);
    const menuButton = screen.getByRole("menu", { name: "Close menu" });

    expect(menuButton).toBeInTheDocument();
  });

  it("aria label is equal Open menu when isOpen  equal to false.", () => {
    const { container } = render(
      <HamburgerMenu isOpen={false} toggleMenu={toggleMenuMock} />
    );
    logRoles(container);
    const menuButton = screen.getByRole("menu", { name: "Open menu" });

    expect(menuButton).toBeInTheDocument();
  });

  it("toggles icon when clicked", async () => {
    const { rerender } = render(
      <HamburgerMenu isOpen={false} toggleMenu={toggleMenuMock} />
    );

    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    rerender(<HamburgerMenu isOpen={true} toggleMenu={toggleMenuMock} />);

    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });
});
