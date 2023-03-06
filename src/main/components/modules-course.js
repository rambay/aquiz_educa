import React from "react";
import "./modules-courses.css";

function ModulesCourses(props) {
  return (
    <div className="ModulesCourses">
      <div className="wrapper ModulesCourses-Flex">
        {props.modules.courses.map(item => {
          return (
            <article className="ModulesCourse" key={item.id}>
              <h3 className="ModulesCourse__title">{item.title}</h3>
              <p className="ModulesCourse__description">{item.description}</p>
              <img
                className="ModulesCourse__img"
                src={item.src}
                alt={item.alt}
              />
              <a className="ModulesCourse__btn" href="#">
                Ver más
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ModulesCourses;
