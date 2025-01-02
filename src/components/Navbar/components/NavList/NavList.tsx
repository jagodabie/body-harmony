import Link from "next/link";
import { NavItem } from "@/types";

type NavListProps = {
  navItems: NavItem[];
  isMenuOpen: boolean;
};

export const NavList = ({ navItems, isMenuOpen }: NavListProps) => {
  return (
    <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
      {navItems.map(({ label, href }) => (
        <li key={label} className="nav-list-item">
          <Link href={href} className="nav-link">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
