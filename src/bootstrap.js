import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import AdminProvider from "./providers/AdminProvider";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <AdminProvider>
      <App />
    </AdminProvider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
