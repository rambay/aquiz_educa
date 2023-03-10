import React, { Component } from "react";
import EducationImage from "/public/assets/images/home.webp";
import suscribetIMG from "/public/assets/images/contacto.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ModulesInfo from "../components/ModulesInfo";
import FormSuscribe from "../components/FormSuscribe";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <main>
          <section className="aquizHomeContainer">
            <div className="wrapper">
              <div className="aquizHome">
                <div className="aquizHome__content">
                  <h2 className="title">¿Qué es AQUIZ EDUCA?</h2>
                  <p className="description">
                    AQUIZ, es una plataforma educativa virtual que complementa
                    lo aprendido en el aula de una manera dinámica, divertida e
                    innovadora.
                  </p>
                </div>
                <figure className="aquizHome__figure">
                  <img src={EducationImage} alt="Home" />
                </figure>
              </div>
            </div>
          </section>
          <ModulesInfo />
          <section className="SuscribeContainer">
            <div className="wrapper">
              <div className="Suscribe">
                <h2 className="Suscribe__title">
                  Brindamos aprendizaje didáctico y <br /> gamificado con
                  contenido de calidad.
                </h2>
                <div className="SuscribeFormContainer">
                  <FormSuscribe />
                  <img
                    src={suscribetIMG}
                    className="SuscribetIMG"
                    alt="Suscribe"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
