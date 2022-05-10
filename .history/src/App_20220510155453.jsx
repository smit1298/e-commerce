import React, { Component } from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return (
      <React.>
        <NavBar />
        <MainContent />
      </React.>
    );
  }
}
