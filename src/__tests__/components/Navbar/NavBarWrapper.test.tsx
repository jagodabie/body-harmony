import { screen } from "@testing-library/react";

import { useScreenSize } from "@/hooks/useScreenSize";

import { render } from "../../../../custom-render";
import { NavBarWrapper } from "../../../components/Navbar/NavBarWrapper";

jest.mock("../../../hooks/useScreenSize", () => ({
  useScreenSize: jest.fn(),
}));

describe("NavBarWrapper", () => {
  it("renders HamburgerMenu when isMobile is true", () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isMobile: true });

    render(<NavBarWrapper navItems={[]} />);
    const hamburgerMenu = screen.getByTestId("hamburger-icon");

    expect(hamburgerMenu).toBeInTheDocument();
  });

  it("does not render HamburgerMenu when isMobile is false", () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isMobile: false });

    render(<NavBarWrapper navItems={[]} />);
    const hamburgerMenu = screen.queryByTestId("hamburger-icon");

    expect(hamburgerMenu).not.toBeInTheDocument();
  });
  it("renders all child components correctly ", () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isMobile: false });

    render(<NavBarWrapper navItems={[]} />);

    const navBar = screen.getByRole("navigation");
    const switchElement = screen.getByRole("checkbox");

    expect(navBar).toBeInTheDocument();

    expect(switchElement).toBeInTheDocument();
  });
});
