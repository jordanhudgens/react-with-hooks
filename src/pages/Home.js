import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import PortfolioItems from "../components/portfolio/PortfolioItems";

export default () => {
  return (
    <DashboardLayout>
      <h1>JWT: {localStorage.getItem("devcamp_space_secure_token")}</h1>
      <PortfolioItems />
    </DashboardLayout>
  );
};
