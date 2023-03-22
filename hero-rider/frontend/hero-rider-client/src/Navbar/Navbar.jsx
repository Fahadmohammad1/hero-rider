import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h3 className="nav-title">Hero Rider</h3>
      </div>
      <div>
        <Link to="/Dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
