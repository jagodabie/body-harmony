"use client";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { NavItem } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";

import { CustomSwitch } from "./components/CustomSwitch/CustomSwitch";

import "./index.css";

import { useTheme } from "@/providers/themeProvider/ThemeProvider";

type NavigationProps = {
  navItems: NavItem[];
};

export const Navigation = ({ navItems }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isMobile } = useScreenSize();
  const { theme, toggleTheme } = useTheme();

  const handleHamburgerClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <CustomSwitch theme={theme} toggleTheme={toggleTheme} />
      {isMobile && (
        <div
          className="hamburger-icon"
          onClick={handleHamburgerClick}
          aria-label="Open menu"
          role="menu"
        >
          {isMobile && (isMenuOpen ? <CloseIcon /> : <MenuIcon />)}
        </div>
      )}
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        {navItems?.map(({ label, href }) => (
          <li key={label} className="nav-list-item">
            <Link href={href} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
