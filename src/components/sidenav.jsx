import React, { useState } from "react";

const SideNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [displayP, setDisplayP] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
    setDisplayP(!displayP);
  };

  return (
    <div className={`sidenav ${expanded ? "expanded" : ""}`}>
      <button
        className="menu-button mt-2 d-flex text-center"
        onClick={toggleNav}
      >
        <i class="fa-solid mt-3 me-4 fa-lg fa-bars"></i>{" "}
        <p className={`mt-0 ${expanded ? "p1" : "p2"}`}>Menu</p>
      </button>
      <ul className="mt-5 d-inline">
        <li className="ms-2 mt-5">
          <a className="d-flex ps-2 pt-0 pb-0" href="#Home">
            <i class="fa-solid mt-4 me-4 fa-xl fa-house-chimney-user"></i>
            <p className={`${expanded ? "p1" : "p2"}`}>Home</p>
          </a>
        </li>
        <li className={`ms-2 ${expanded ? "mt-3" : "mt-4"}`}>
          <a className="d-flex ps-2 pt-0 pb-0 " href="#about">
            <i class="fa-solid mt-4 me-4 fa-xl fa-address-card "></i>
            <p className={`${expanded ? "p1" : "p2"}`}>About Us</p>
          </a>
        </li>
        <li className={`ms-2 ${expanded ? "mt-3" : "mt-4"}`}>
          <a className="d-flex ps-2 pt-0 pb-0 " href="#jobs">
            <i class="fa-solid mt-4 me-4 fa-xl fa-list-check"></i>
            <p className={`${expanded ? "p1" : "p2"}`}>Job Listings</p>
          </a>
        </li>
        <li className={`ms-2 ${expanded ? "mt-3" : "mt-4"}`}>
          <a className="d-flex ps-2 pt-0 pb-0 " href="#contact">
            <i class="fa-solid mt-4 me-4 fa-xl fa-address-book"></i>
            <p className={`${expanded ? "p1" : "p2"}`}>Contact</p>
          </a>
        </li>
      </ul>
      {/* Add more links as needed */}
    </div>
  );
};

export default SideNav;
