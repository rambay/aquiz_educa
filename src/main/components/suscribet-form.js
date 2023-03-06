import React from "react";

function SuscribetForm(props) {
  return (
    <div className="SuscribetBox">
      <h3 className="SuscribetBox__title">
        ¿Quieres saber más <br /> de Aquiz educa?
      </h3>
      <p className="SuscribetBox__description">
        ¿Tienes alguna duda? ¿Quieres saber más de nosotros? No dudes en
        contactarnos! Escríbenos y te responderemos en el menor tiempo posible!
      </p>

      <form className="SuscribetForm" action="">
        <label for="name">Nombres y apellidos</label>
        <input
          type="text"
          id="name"
          placeholder="Nombres y apellidos"
          required
        />
        <label for="email">Correo electronico</label>
        <input
          type="text"
          id="email"
          placeholder="Correo electronico"
          required
        />
        <div className="SuscribetForm__btn">
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default SuscribetForm;
