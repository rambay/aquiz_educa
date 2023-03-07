import React from "react";

function FormSuscribe() {
  return (
    <div className="SuscribeBox">
      <h3 className="SuscribeBox__title">
        ¿Quieres saber más <br /> de Aquiz educa?
      </h3>
      <p className="SuscribeBox__description">
        ¿Tienes alguna duda? ¿Quieres saber más de nosotros? No dudes en
        suscribirte! Recibe las ultimas novedades!.
      </p>

      <form className="SuscribeForm">
        <label htmlFor="email">Correo electronico</label>
        <input
          type="text"
          id="email"
          placeholder="Correo electronico"
          required
        />
        <div className="SuscribeForm__btn">
          <button>Suscribirse</button>
        </div>
      </form>
    </div>
  );
}

export default FormSuscribe;
