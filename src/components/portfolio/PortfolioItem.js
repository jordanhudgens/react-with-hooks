import React, { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const [portfolioItemClass, setPortfolioItemClass] = useState("");

  const { id, description, thumb_image_url, logo_url } = props.item;

  const handleMouseEnter = () => {
    setPortfolioItemClass("darken-img");
  };

  const handleMouseLeave = () => {
    setPortfolioItemClass("");
  };

  return (
    <Link to={`/portfolio/${id}`}>
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`portfolio-img-background ${portfolioItemClass}`}
          style={{
            backgroundImage: "url(" + thumb_image_url + ")",
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    </Link>
  );
};
