import React, {useState} from "react";
import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'

const Navbar = () => {

    const [navBars, setNavBar] = useState("menu");
    //Functia pentru a vedea navbarul
    const showNavBar = () => {
        setNavBar('menu showNavbar');
    };

    const removeNavBar = () => {
        setNavBar('remove');
    };

    return (
    <div className="navBar">
        <div className="logoDiv">
            <BiLogoMediumOld className="icon" />
            <span>OU-Trips</span>
        </div>
        <div className={navBars}>
            <ul>
                <li className="navList">Destination </li>
                <li className="navList">About Us</li>
                <li className="navList">Testimonial</li>
                <li className="navList">Gallery </li>
            </ul>
            {/* Icon to remove Navbar */}
            <AiFillCloseCircle onClick={removeNavBar} className="icon closeIcon" />
        </div>
        <button className="signUpBtn btn"> Sign Up</button>
        <PiDotsNineBold onClick={showNavBar} className="icon menuIcon"/>
    </div>
    );
};

export default Navbar