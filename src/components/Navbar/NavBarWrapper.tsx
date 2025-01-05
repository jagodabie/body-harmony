"use client";
import { useState } from "react";

import useScreenSize from "@/hooks/useScreenSize";
import { NavItem } from "@/types";

import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import NavbarLogo from "./components/NavBarLogo/NavBarLogo";
import { Navigation } from "./components/Navigation/Navigation";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";

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
