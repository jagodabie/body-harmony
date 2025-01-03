"use client";
import { NavItem } from "@/types";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { Navigation } from "./components/Navigation/Navigation";
import NavbarLogo from "./components/NavBarLogo/NavBarLogo";

import "./index.css";

type NavBarWrapperProps = {
  navItems: NavItem[];
};

export const NavBarWrapper = ({ navItems }: NavBarWrapperProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isMobile } = useScreenSize();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="navbar__wrapper">
      <NavbarLogo />
      <Navigation navItems={navItems} isMenuOpen={isMenuOpen} />
      <ThemeSwitcher />
      {isMobile && (
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
};
