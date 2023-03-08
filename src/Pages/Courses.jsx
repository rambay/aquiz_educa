import React, { Component } from "react";
import Layout from "../Template/Layout";
import TitleBar from "../Componentes/TitleBar";
import ModuleCourse from "../Componentes/ModuleCourse";

import CoursesList from "../json/coursesList.json";

class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <Layout>
          <TitleBar title="Cursos" />
          {CoursesList.listCourses.map((course, idx) => {
            return (
              <ModuleCourse
                key={idx}
                name={course.title}
                listCourses={course.courses}
              />
            );
          })}
        </Layout>
      </div>
    );
  }
}

export default Courses;
