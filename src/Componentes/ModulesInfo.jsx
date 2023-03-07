import React from "react";
import module1 from "/public/assets/images/lesson01.png";
import module2 from "/public/assets/images/lesson02.png";
import module3 from "/public/assets/images/lesson04.png";

const modules = [
  {
    id: 1,
    title: "Contenido Dinámico",
    description:
      "La particularidad de nuestros cursos es brindar enseñanza de manera didáctica y entretenida apoyándonos de lo visual y herramientas digitales.",
    image: module1,
  },
  {
    id: 2,
    title: "Pon a prueba tus conocimientos",
    description:
      "Pon en la practica a tus conocimientos con los diferentes y variados ejercicios online que te ofrecemos para ayudarte a comprender mas las materias.",
    image: module2,
  },
  {
    id: 3,
    title: "Recursos Digitales",
    description:
      "Cuenta con las mejores herramientas digitales desde archivos, libros, audios y videos.",
    image: module3,
  },
];

function ModulesInfo() {
  return (
    <div className="ModulesInfoContainer">
      <div className="wrapper">
        <div className="ModulesInfoList">
          {modules.map((item) => {
            return (
              <article className="ModulesInfo" key={item.id}>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <img src={item.image} alt={item.alt} />
                <a className="btn" href="#">
                  Ver más
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ModulesInfo;
