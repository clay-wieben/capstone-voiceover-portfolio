import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./navigation/navigation-container";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import InvalidLink from "./pages/invalid-link";
import Icons from "../helpers/icons";
import "../style/base.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className="app">
        <h1>Clay Wieben Voiceover</h1>
      </div>
    );
  }

  //eslint-disable-next-line
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route element={<InvalidLink />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
