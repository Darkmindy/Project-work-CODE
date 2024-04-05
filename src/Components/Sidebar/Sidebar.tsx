import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-des">
        <ul className="d-flex flex-column border rounded p-4">
          <button className="btn btn-light">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/128/188/188965.png"
              alt=""
            />
            <p className="linktext">National Pokedex Number</p>
          </button>

          <button className="btn btn-light">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/128/14079/14079446.png"
              alt=""
            />
            <p className="linktext">Fight Attributes</p>
          </button>

          <button className="btn btn-light">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/128/14079/14079475.png"
              alt=""
            />
            <p className="linktext">Type</p>
          </button>

          <button className="btn btn-light">
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/128/14079/14079463.png"
              alt=""
            />
            <p className="linktext">Powers</p>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
