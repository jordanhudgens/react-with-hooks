import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Axios from "axios";

export default (props) => {
  const [portfolioItem, setPortfolioItem] = useState(null);

  useEffect(() => {
    getPortfolioItem(props.match.params.id);
  }, []);

  const getPortfolioItem = (id) => {
    const api_url = `https://reactportfolio.devcamp.space/portfolio/portfolio_items/${id}`;

    Axios.get(api_url)
      .then((response) => {
        console.log("portfolio item", response.data);
        setPortfolioItem(response.data.portfolio_item);
      })
      .catch((error) => {
        console.log("errors", error);
      });
  };

  if (!portfolioItem) {
    return <div>Loading...</div>;
  }

  const { banner_image_url, description, logo_url, name, url } = portfolioItem;

  const bannerStyles = {
    backgroundImage: "url(" + banner_image_url + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backroundPosition: "center center",
  };

  const logoStyles = {
    width: "200px",
  };

  return (
    <DashboardLayout>
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description">{description}</div>

        <div className="bottom-content-wrapper">
          <a className="site-link" href={url} target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
};
