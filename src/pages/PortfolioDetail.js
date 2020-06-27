import React, { useEffect } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Axios from "axios";

export default (props) => {
  useEffect(() => {
    getPortfolioItem(props.match.params.id);
  }, []);

  const getPortfolioItem = (id) => {
    const api_url = `https://reactportfolio.devcamp.space/portfolio/portfolio_items/${id}`;

    Axios.get(api_url)
      .then((response) => {
        console.log("portfolio item", response.data);
      })
      .catch((error) => {
        console.log("errors", error);
      });
  };

  return (
    <DashboardLayout>
      <h1>Portfolio detail</h1>
    </DashboardLayout>
  );
};
