import React from "react";
import Menu from "./Menu";
import LogoAquiz from "/public/assets/logoHeader.png";

function Navbar({ title, menuList }) {
  return (
    <div className="NavbarContainer">
      <div className="wrapper">
        <div className="Navbar">
          <a className="Navbar__logo" href="#">
            <img src={LogoAquiz} alt="LogoAquizEduca" />
          </a>
          <Menu menuList={menuList} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
