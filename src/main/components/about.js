import React from "react";
import logoAbout from "../../../assets/images/home.webp";
import "./about.css";

function About(props) {
  return (
    <section className="About">
      <div className="wrapper About-Flex">
        <div className="AboutHome wow fadeInUp">
          <h2 className="AboutHome__title">¿Qué es AQUIZ EDUCA?</h2>
          <p className="AboutHome__description">
            AQUIZ, es una plataforma educativa virtual que complementa lo
            aprendido en el aula de una manera dinámica, divertida e innovadora.
          </p>
        </div>
        <a className="AboutIMG" href="#">
          <img src={logoAbout} alt="educationDigital" />
        </a>
      </div>
    </section>
  );
}

export default About;
