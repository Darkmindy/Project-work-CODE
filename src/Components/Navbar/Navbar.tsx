import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="Logo"
            className="logo"
          />
          Pokémon Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem title="Home" to="/" />
            <NavItem title="About us" to="/about-us" />
            <NavItem title="Contacts" to="/contacts" />
          </ul>
          <div className="d-flex align-items-center ms-auto">
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-success me-2" type="button">
                Sign Up
              </button>
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ title, to }: { title: string; to: string }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default Navbar;
