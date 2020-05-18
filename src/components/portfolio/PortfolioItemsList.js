import React from "react";
import PortfolioItem from "./PortfolioItem";

export default () => {
  const items = [
    { id: 1, title: "Quip", description: "Toothbrush company" },
    { id: 2, title: "Eventbrite", description: "Event planning" },
    { id: 3, title: "DevCamp", description: "Coding LMS" },
  ];

  const itemsRenderer = () => {
    return items.map((item) => <PortfolioItem key={item.id} item={item} />);
  };

  return <div>{itemsRenderer()}</div>;
};
