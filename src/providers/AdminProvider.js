import React, { useState } from "react";

import AdminContext from "../contexts/AdminContext";

export default (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const stateValue = {
    isLoggedIn,
  };

  return (
    <AdminContext.Provider value={stateValue}>
      {props.children}
    </AdminContext.Provider>
  );
};
