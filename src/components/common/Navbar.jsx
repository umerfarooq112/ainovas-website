import logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import clsx from "clsx";


const Navbar = ({ currentPage }) => {
  const [size, setSize] = useState("large");

  const staticNavLinks = [
    { title: "HOME", to:    "/", key: 0 },
    { title: "ABOUT", to:   "/about", key: 1 },
    { title: "SOLUTION", to:"/solution", key: 2 },
    { title: "CONTACT", to: "/contact", key: 3 },
    { title: "PROJECTS", to:"/project", key: 4 },
  ];



  // const recaptchaRef = React.createRef();

  return (
    /*
        88b 88    db    Yb    dP 88""Yb    db    88""Yb
        88Yb88   dPYb    Yb  dP  88__dP   dPYb   88__dP
        88 Y88  dP__Yb    YbdP   88""Yb  dP__Yb  88"Yb
        88  Y8 dP""""Yb    YP    88oodP dP""""Yb 88  Yb
        */
    <nav className="nav pt-24-px ">
      <div className="d-flex justify-content-between  align-items-center w-100-p    ">
        <div className="logo-div d-flex   align-items-center ml-140-px ">
          <img src={logo} alt="" className="logo-img" />
          {/* <p className="m-0 logo-text">Prism</p> */}
        </div>
        <div className="nav-div d-flex  mr-140-px ">
          {staticNavLinks.map((navLink, i) => (
            <div
              key={navLink.key}
            //   color-primary
              className={ clsx('links f-22 ',  currentPage === i ? " active-link color-primary" : " ")}
            >
              <Link to={navLink.to}>{navLink.title}</Link>
            </div>
          ))}
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
