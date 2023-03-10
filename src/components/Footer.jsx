import React from "react";
import FooterLogo from "/public/assets/images/logoHeader.png";

function Footer() {
  return (
    <footer className="Footer">
      <div className="wrapper FooterContainer">
        <div className="FooterLogo">
          <a href="#">
            <img
              className="FooterLogo__img"
              src={FooterLogo}
              alt="LogoImage"
              width="210"
            />
          </a>
        </div>
        <div className="FooterMenu">
          <div className="FooterMenu__col1">
            <h4 className="title">Más información</h4>
            <ul>
              <li>¿Qué es AQUIZ?</li>
              <li>¿Qué brindamos?</li>
              <li>¿Qué lograrias?</li>
            </ul>
          </div>
          <div className="FooterMenu__col2">
            <h4 className="title">Contacto</h4>
            <ul>
              <li>aquizeduca@gmail.com</li>
              <li>933 581 579</li>
              <li>Aquiz | Educa</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
