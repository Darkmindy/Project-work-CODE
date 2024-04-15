import React from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pokémon Store
        </a>
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
            <NavItem title="Home" />
            <NavItem title="About us" />
            <NavItem title="Contacts" />
          </ul>
          <Cart />
          <div className="d-flex align-items-center ms-3">
            <button className="btn btn-outline-success me-2" type="button">
              Sign Up
            </button>
            <button className="btn btn-success" type="button">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ title }: { title: string }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {title}
      </a>
    </li>
  );
};

export default Navbar;
