import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="NavbarItems">
      <Link to="/home" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
      <li className="nav-item" onClick={closeMenu}>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/footer" className="nav-link">
            <button className="btn">Sign In</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
