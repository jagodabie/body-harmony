"use client";

import { useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { NavItem } from "@/types";

import "./index.css";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { NavList } from "./components/NavList/NavList";

type NavigationProps = {
  navItems: NavItem[];
};

export const Navigation = ({ navItems }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useScreenSize();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav>
      <ThemeSwitcher />
      {isMobile && (
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
      <NavList navItems={navItems} isMenuOpen={isMenuOpen} />
    </nav>
  );
};
