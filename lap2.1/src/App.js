import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
            <h1>React Learning </h1>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
