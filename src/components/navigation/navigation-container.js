import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/navigation.scss";
import Logo from "../../../src/assets/images/branding/CW-Logo.svg";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <img src={Logo} alt="logo" />
        <div className="brand-name">CLAY WIEBEN</div>
      </div>

      <div className="right-side">
        <div className="nav-link-wrapper">
          <NavLink to="/" className="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/portfolio" className="nav-link-active">
            Portfolio
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about" className="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" className="nav-link-active">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
