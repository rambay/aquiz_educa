import React from "react";

function TitleBar({ title }) {
  return (
    <div className="titleBarContainer">
      <div className="wrapper">
        <div className="TitleBar">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
