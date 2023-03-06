import React from "react";
import suscribetIMG from "../../../assets/images/contacto.svg";
import "./suscribet.css";
import SuscribetForm from "./suscribet-form";

function Suscribet(props) {
  return (
    <section className="Suscribet">
      <h2 className="Suscribet__title wow pulse">
        Brindamos aprendizaje didáctico y <br /> gamificado con contenido de
        calidad.
      </h2>
      <div className="Suscribe">
        <div className="wrapper Suscribe-Flex">
          <SuscribetForm />
          <img
            src={suscribetIMG}
            className="SuscribetIMG wow pulse"
            alt="Suscribe"
          />
        </div>
      </div>
    </section>
  );
}

export default Suscribet;
