import React, { useEffect, useState } from "react";
import axios from "axios";

import PortfolioItem from "./PortfolioItem";

const API_URL =
  "https://reactportfolio.devcamp.space/portfolio/portfolio_items";

export default () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPortfolioItems();
  }, []);

  const getPortfolioItems = () => {
    axios.get(API_URL).then((response) => {
      setItems(response.data.portfolio_items);
    });
  };

  const itemsRenderer = () => {
    return items.map((item) => <PortfolioItem key={item.id} item={item} />);
  };

  return <div>{itemsRenderer()}</div>;
};
