import React from "react";
import { Link } from "react-router-dom";

const logo = require("../../../static/assets/images/code-2.png");

export default () => {
  return (
    <div>
      <img src={logo} />
      <div>Jordan Hudgens</div>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};
