import React, { useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import Avatar from "./assets/avatar.avif";

import "./Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    console.log(true);
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img src={Logo} alt="" className="nav__logo" />

        <img src={Avatar} alt="" className="nav__avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
