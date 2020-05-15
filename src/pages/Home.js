import React from "react";
import NavBar from "../components/shared/NavBar";
import DashboardLayout from "../components/layouts/DashboardLayout";

export default () => {
  const dynamicBackgroundColor = "black";

  const styles = {
    height: "100px",
    backgroundColor: dynamicBackgroundColor,
    color: "white",
  };

  return (
    <DashboardLayout>
      <h1>DevCamp React Starter</h1>
      <h2>React + React Router</h2>

      <div style={styles}>Testing styles</div>
    </DashboardLayout>
  );
};
