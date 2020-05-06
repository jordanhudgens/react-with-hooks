import React, { Component } from "react";

const NavBar = () => {
  return (
    <div>
      <div>Jordan Hudgens</div>

      <div>Home</div>

      <div>Portfolio</div>
    </div>
  );
};

export default class App extends Component {
  render() {
    const dynamicBackgroundColor = "black";

    const styles = {
      height: "100px",
      backgroundColor: dynamicBackgroundColor,
      color: "white",
    };

    return (
      <div className="app">
        <NavBar />
        <h1>DevCamp React Starter</h1>
        <h2>React + React Router</h2>

        <div style={styles}>Testing styles</div>
        <NavBar />
      </div>
    );
  }
}
