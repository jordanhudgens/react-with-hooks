import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="about" path="/about" component={About} />,
  <Route exact key="blog" path="/blog" component={Blog} />,
];
