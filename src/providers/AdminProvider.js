import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminContext from "../contexts/AdminContext";

const API_URL = "https://api.devcamp.space/token_logged_in";

export default (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("devcamp_space_secure_token");

    if (token) {
      checkLogin(token);
    }
  }, []);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("devcamp_space_secure_token");
  };

  const checkLogin = (token) => {
    axios
      .get(API_URL, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log("res", response.data);
        if (response.data.client) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const stateValue = {
    isLoggedIn,
    checkLogin,
    logout,
  };

  return (
    <AdminContext.Provider value={stateValue}>
      {props.children}
    </AdminContext.Provider>
  );
};
