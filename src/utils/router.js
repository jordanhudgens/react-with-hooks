import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import AdminLogin from "../pages/AdminLogin";
import BlogForm from "../pages/BlogForm";

export const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="about" path="/about" component={About} />,
  <Route exact key="blog" path="/blog" component={Blog} />,
  <Route exact key="admin-login" path="/admin-login" component={AdminLogin} />,
];

export const adminRoutes = [
  <Route exact key="blog-form" path="/blog-form" component={BlogForm} />,
];
