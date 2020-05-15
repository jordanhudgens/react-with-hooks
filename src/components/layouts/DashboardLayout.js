import React from "react";
import NavBar from "../shared/NavBar";

export default (props) => {
  return (
    <div className="app">
      <NavBar />
      {props.children}
    </div>
  );
};
