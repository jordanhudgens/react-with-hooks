import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <NavLink exact activeClassName="active-nav-link" to="/">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink activeClassName="active-nav-link" to="/about">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink activeClassName="active-nav-link" to="/blog">
            Blog
          </NavLink>
        </div>
      </div>

      {isLoggedIn ? (
        <div className="right-side">
          <a onClick={logout}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        </div>
      ) : null}
    </div>
  );
};
