import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import router from "../utils/router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>{router}</Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
