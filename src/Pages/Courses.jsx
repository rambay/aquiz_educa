import React, { Component } from "react";
import Layout from "../Template/Layout";
import TitleBar from "../components/TitleBar";
import ModuleCourse from "../components/ModuleCourse";

import CoursesList from "../json/coursesList.json";

class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <Layout>
          <TitleBar title="Cursos" />
          <div className="CoursesContainer">
            <div className="wrapper">
              <div className="CoursesList">
                {CoursesList.listCourses.map((course, idx) => {
                  return (
                    <ModuleCourse
                      key={idx}
                      name={course.title}
                      listCourses={course.courses}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Courses;
