import { screen } from "@testing-library/react";
import { NavItem } from "@/types";
import "@testing-library/jest-dom";
import { NavList } from "@/components/Navbar/components/Navigation/Navigation";
import { render } from "../../../../custom-render";

const mockNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

describe("NavList Component", () => {
  it("renders list items based on navItems", () => {
    render(<NavList navItems={mockNavItems} isMenuOpen={false} />);

    mockNavItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href
      );
    });
  });

  it("applies 'open' class to ul when isMenuOpen is true", () => {
    render(<NavList navItems={mockNavItems} isMenuOpen={true} />);

    const navList = screen.getByRole("list");

    expect(navList).toHaveClass("open");
  });

  it("does not apply 'open' class to ul when isMenuOpen is false", () => {
    render(<NavList navItems={mockNavItems} isMenuOpen={false} />);

    const navList = screen.getByRole("list");

    expect(navList).not.toHaveClass("open");
  });

  it("renders empty list when no navItems are provided", () => {
    render(<NavList navItems={[]} isMenuOpen={false} />);

    const navList = screen.getByRole("list");

    expect(navList.children.length).toBe(0);
  });
});
