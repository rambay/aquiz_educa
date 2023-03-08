import React from "react";
import Footer from "../Componentes/Footer";
import Navbar from "../Componentes/Navbar";

function Layout(props) {
  return (
    <div className="Layout">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
