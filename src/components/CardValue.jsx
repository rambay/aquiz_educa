import React from "react";

function CardValue({ title, description, image }) {
  return (
    <div className="CardValue">
      <div className="CardValue__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="CardValue__image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default CardValue;
