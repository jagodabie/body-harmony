import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <div
      className="hamburger-icon"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      role="menu"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
};
