<<<<<<< HEAD
import React from "react";
import Cart from "../Cart/Cart";
=======
import React, { FC } from 'react';
import Cart from '../Cart/Cart';
import './Navbar.css'
import AdminPage from '../../Pages/AdminPage/AdminPage';
import { Link } from 'react-router-dom';
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pokemon Store
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
        </div>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
const NavItem = ({ title }: { title: string }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {title}
      </a>
    </li>
  );
=======
                    <a className="navbar-brand" href="#">Pokemon Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to= "/main-page">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            </Link>
                            <Link to= "/about-us">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                        </ul>
                        <Cart/>
                    </div>
                </div>
            </nav>
        </>
    );
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7
};

export default Navbar;
