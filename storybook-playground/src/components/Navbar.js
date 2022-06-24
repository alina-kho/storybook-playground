import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = (props) => {
  return (
    <Router>
      <header
        style={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <Logo />
        <nav>
          <Link to="/" className="nav-link">
            about
          </Link>
          <Link to="/" className="nav-link">
            contact
          </Link>
          <Link to="/" className="nav-link">
            icon
          </Link>
          <Link to="/" className="nav-link">
            icon
          </Link>
          <Link to="/" className="nav-link">
            icon
          </Link>
        </nav>
      </header>
    </Router>
  );
};
