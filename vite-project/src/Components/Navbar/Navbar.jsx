import React, { useState } from "react";
import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-scroll"; // Importăm Link din react-scroll

const Navbar = () => {
  const [navBars, setNavBar] = useState("menu");

  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  const removeNavBar = () => {
    setNavBar("remove");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>OU-Trips</span>
      </div>
      <div className={navBars}>
        <ul>
          <li className="navList">
            <Link
              activeClass="active"
              to="destination"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLink"
            >
              Destinations
            </Link>
          </li>
          <li className="navList">
            <Link
              activeClass="active"
              to="questions"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLink"
            >
              FAQ
            </Link>
          </li>
          <li className="navList">
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLink"
            >
              About Us
            </Link>
          </li>
        </ul>
        <AiFillCloseCircle
          onClick={removeNavBar}
          className="icon closeIcon"
        />
      </div>
      <button className="signUpBtn btn"> Sign Up</button>
      <PiDotsNineBold onClick={showNavBar} className="icon menuIcon" />
    </div>
  );
};

export default Navbar;
