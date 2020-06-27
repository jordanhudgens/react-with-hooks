import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";

export default (props) => {
  console.log("Props for the portfolio detail", props);

  return (
    <DashboardLayout>
      <h1>Portfolio detail for: {props.match.params.id}</h1>
    </DashboardLayout>
  );
};
