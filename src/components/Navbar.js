import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navlinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div>
      <nav className="primary-nav">
        <NavLink style={navlinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navlinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navlinkStyles} to="/contact">
          Contact
        </NavLink>
        <NavLink style={navlinkStyles} to="/projects">
          Projects
        </NavLink>
        <NavLink style={navlinkStyles} to="/users">
          Users
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
