import Link from "next/link";

import { NavItem } from "@/types";

type NavigationProps = {
  navItems: NavItem[];
  isMenuOpen: boolean;
};

export const Navigation = ({ navItems, isMenuOpen }: NavigationProps) => {
  return (
    <nav>
      <ul
        className={`navbar__nav-list ${
          isMenuOpen ? "navbar__nav-list--open" : ""
        }`}
      >
        {navItems.map(({ label, href }) => (
          <li key={label} className="navbar__nav-item">
            <Link href={href} className="navbar__nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
