import React from "react";
import Menu from "./Menu";
import LogoAquiz from "/public/assets/logoHeader.png";
import HeroIMG from "/public/assets/images/header-img.svg";
import background from "/public/assets/images/pattern-header.png";

function Header(props) {
  return (
    <header
      style={{ backgroundImage: `url(${background})` }}
      className="Header"
    >
      <div className="wrapper">
        <div className="HeaderContainer">
          <div className="HeaderTop">
            <a className="HeaderTop__logo" href="#">
              <img src={LogoAquiz} alt="LogoAquizEduca" />
            </a>
            <Menu menuList={props.menuList} />
          </div>
          <div className="headerHero">
            <img src={HeroIMG} />
            <div className="HeroContent">
              <h2 className="HeroContent__title">
                <span>Plataforma</span> de contenido <span>digital</span>{" "}
                educativo
              </h2>
              <p className="HeroContent__description">
                Somos una plataforma educativa online, donde implementamos
                diferentes métodos de enseñanza basados en la tecnología como
                son los videos educativos, juegos, lecturas, etc. Con la
                finalidad de lograr una mejor captación de nuestros alumnos.
              </p>
              <a className="HeroContent__btn" href="#">
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
