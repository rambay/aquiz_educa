import React, { Fragment } from "react";

function ModuleCourse({ name, listCourses }) {
  return (
    <section className="ModuleCourse">
      <header>
        <h2>{name}</h2>
      </header>
      <div className="ModuleCourse__road">
        <ul>
          {listCourses.map((el, idx) => {
            return <li key={idx}>{el.name}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ModuleCourse;
