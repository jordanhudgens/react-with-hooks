import React, { useContext } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import PortfolioItems from "../components/portfolio/PortfolioItems";
import AdminContext from "../contexts/AdminContext";

export default () => {
  const { isLoggedIn } = useContext(AdminContext);

  return (
    <DashboardLayout>
      <h1>Is logged in?: {JSON.stringify(isLoggedIn)}</h1>
      <PortfolioItems />
    </DashboardLayout>
  );
};
