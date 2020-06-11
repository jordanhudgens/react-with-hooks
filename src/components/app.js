import React, { useContext } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import AdminContext from "../contexts/AdminContext";
import { routes, adminRoutes } from "../utils/router";

const App = () => {
  const { isLoggedIn } = useContext(AdminContext);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes}

          {isLoggedIn ? adminRoutes : null}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
