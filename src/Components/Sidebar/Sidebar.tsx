import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
<<<<<<< HEAD
    <nav className="sidebar-des">
      <h2 className="my-3">Select by</h2>
      <ul className="border rounded p-2">
        <li>
          <a className="ul-des my-3" href="#">
            National Pokedex Number
          </a>
        </li>
        <li>
          <a className="ul-des my-3" href="#">
            Fight Attributes
          </a>
        </li>
        <li>
          <a className="ul-des my-3" href="#">
            Type
          </a>
        </li>
      </ul>
      <ul className="border rounded p-4">
        <li>
          <a className="ul-des my-3" href="#">
            Divide for ATK powe
          </a>
        </li>
        <li>
          <a className="ul-des my-3" href="#">
            Weakness
          </a>
        </li>
        <li>
          <a className="ul-des my-3" href="#">
            Resistance
          </a>
        </li>
      </ul>
    </nav>
  );
};
=======
    <>
      <div className='sidebar-des'>
       
        <ul className='d-flex flex-column border rounded  p-4'>

        <button className='btn btn-light'>
        <img  className='icon' src="https://cdn-icons-png.flaticon.com/128/188/188965.png" alt="" />
        <p className='linktext'>National Pokedex Number</p>
          </button>

            <button className='btn btn-light'>
            <img  className='icon' src="https://cdn-icons-png.flaticon.com/128/14079/14079446.png" alt="" />
            <p className='linktext'>Fight Attributes</p>
            </button>

            <button className='btn btn-light'>
            <img  className='icon' src="https://cdn-icons-png.flaticon.com/128/14079/14079475.png" alt="" />
            <p className='linktext'>Type</p>
            </button>
           
           <button className='btn btn-light'>
            <img  className='icon' src="https://cdn-icons-png.flaticon.com/128/14079/14079463.png" alt="" />
            <p className='linktext'>Powers</p>
            </button>
        </ul>
      </div>
    </>
  )
}
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7

export default Sidebar;
