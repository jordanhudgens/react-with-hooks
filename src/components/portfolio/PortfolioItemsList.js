import React, { useEffect, useState } from "react";
import axios from "axios";

import PortfolioItem from "./PortfolioItem";
import Loader from "../shared/Loader";

const API_URL =
  "https://reactportfolio.devcamp.space/portfolio/portfolio_items";

export default () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPortfolioItems();
  }, []);

  const getPortfolioItems = () => {
    axios.get(API_URL).then((response) => {
      setItems(response.data.portfolio_items);
      setIsLoading(false);
    });
  };

  const itemsRenderer = () => {
    return items.map((item) => <PortfolioItem key={item.id} item={item} />);
  };

  if (isLoading) {
    return <Loader />;
  }

  return <div className="portfolio-items-wrapper">{itemsRenderer()}</div>;
};
