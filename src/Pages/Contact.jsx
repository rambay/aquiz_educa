import React, { Component } from "react";
import Layout from "../Template/Layout";
import TitleBar from "../Components/TitleBar";
import ContactBackground from "/public/assets/images/contactBackground.png";

class Contact extends Component {
  render() {
    return (
      <Layout>
        <TitleBar title="Contacto" />
        <main>
          <div className="ContactContainer">
            <div className="wrapper">
              <div className="Contact">
                <div className="Contact__background">
                  <img src={ContactBackground} alt="Contacto" />
                </div>
                <div className="Contact__form">
                  <form>
                    <div className="input nameContact">
                      <label htmlFor="name">Nombre y Apellido</label>
                      <input
                        type="text"
                        placeholder="Nombres y Apellidos"
                        name="name"
                        id="name"
                      />
                    </div>
                    <div className="input emailContact">
                      <label htmlFor="email">Correo electrónico</label>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div className="input messageContact">
                      <label htmlFor="message">Mensaje</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <button>Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Contact;
