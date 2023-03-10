import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

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
