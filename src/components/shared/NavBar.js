import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AdminContext from "../../contexts/AdminContext";

const logo = require("../../../static/assets/images/code-2.png");

export default () => {
  const { logout, isLoggedIn } = useContext(AdminContext);

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <img className="nav-logo" src={logo} />
        <div className="name">Jordan Hudgens</div>

        <div className="nav-link-wrapper">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-link-wrapper">
          <Link to="/about">About</Link>
        </div>

        <div className="nav-link-wrapper">
          <Link to="/blog">Blog</Link>
        </div>
      </div>

      {isLoggedIn ? (
        <div className="right-side">
          <a onClick={logout}>Logout</a>
        </div>
      ) : null}
    </div>
  );
};
