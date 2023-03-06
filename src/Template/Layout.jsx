import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

function Layout(props) {
  return (
    <div className="Layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
