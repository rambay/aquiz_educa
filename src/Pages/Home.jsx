import React, { Component } from "react";
import Layout from "../Template/Layout";
import EducationImage from "/public/assets/images/home.webp";

class Home extends Component {
  render() {
    return (
      <Layout>
        <section className="aquizHomeContainer">
          <div className="wrapper">
            <div className="aquizHome">
              <div className="aquizHome__content">
                <h2 className="aquizHome__title">¿Qué es AQUIZ EDUCA?</h2>
                <p className="aquizHome__description">
                  AQUIZ, es una plataforma educativa virtual que complementa lo
                  aprendido en el aula de una manera dinámica, divertida e
                  innovadora.
                </p>
              </div>
              <figure className="aquizHome__figure">
                <img src={EducationImage} alt="Home" />
              </figure>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Home;
