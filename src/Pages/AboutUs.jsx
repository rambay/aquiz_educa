import React, { Component } from "react";
import Layout from "../Template/Layout";
import CardValue from "../Componentes/CardValue";
import TitleBar from "../Componentes/TitleBar";

import LogoAquiz from "/public/assets/images/logoAquiz.png";
import misionImage from "/public/assets/images/mision.png";
import visionImage from "/public/assets/images/vision.png";

const cardValues = [
  {
    title: "Misión",
    description:
      "Fomentar el desarrollo personal y social de adolescentes y jóvenes a través de la educación digital en actitudes positivas e innovación constante.",
    image: misionImage,
  },
  {
    title: "Visión",
    description:
      "Transmitir ideas inspiradas en la búsqueda que todo el contenido que se comparte en la plataforma tenga una motivación intrínseca inspirada.",
    image: visionImage,
  },
];

class AboutUs extends Component {
  render() {
    return (
      <Layout>
        <TitleBar title="Nosotros" />
        <main>
          <div className="aboutUsContainer">
            <div className="wrapper">
              <div className="aboutUsContent">
                <div className="aboutUs">
                  <figure className="aboutUs__image">
                    <img src={LogoAquiz} alt="Logo" />
                  </figure>
                  <div className="aboutUs__content">
                    <h2>¿Como nació AquizEduca?</h2>
                    <p>
                      AQUIZEDUCA, nació con el único fin de promover la
                      educación online de una manera didáctica, entretenida y
                      eficaz. Pensada para todos los jóvenes que quieran
                      profundizar conocimientos ya sea por medio de una lectura,
                      juegos interactivos, videos, etc.. Así mismo tenemos la
                      confianza que nuestro método de enseñanza es el indicado y
                      mas beneficioso para todos los jóvenes y personas que
                      quieran lograr desarrollarse profesionalmente.
                    </p>
                  </div>
                </div>
                <div className="aboutUsValues">
                  {cardValues.map((card, idx) => (
                    <CardValue
                      key={idx}
                      title={card.title}
                      description={card.description}
                      image={card.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default AboutUs;
