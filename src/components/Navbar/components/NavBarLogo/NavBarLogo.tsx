import Link from "next/link";

import AppLogoIcon from "@/assets/AppLogoIcon";

const NavbarLogo = () => {
  return (
    <div className="navbar__container">
      <Link href="/" className="navbar__nav-link">
        <div className="navbar__title">
          <div className="navbar__logo">
            <AppLogoIcon />
          </div>
          <div className="navbar__text">BodyHarmony</div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarLogo;
