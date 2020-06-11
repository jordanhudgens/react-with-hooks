import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AdminContext from "../../contexts/AdminContext";

const logo = require("../../../static/assets/images/code-2.png");

export default () => {
  const { logout, isLoggedIn } = useContext(AdminContext);

  return (
    <div>
      <img src={logo} />
      <div>Jordan Hudgens</div>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>

      {isLoggedIn ? <a onClick={logout}>Logout</a> : null}
    </div>
  );
};
