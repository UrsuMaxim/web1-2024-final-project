import React from "react";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai"
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <BiLogoMediumOld className='icon' />
                        <span>OU-Trips</span>
                    </div>

                    <div className="socials flex">
                        <ImFacebook className='icon' />
                        <BsTwitter className='icon' />
                        <AiFillInstagram className='icon' />
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">Information</span>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Explore</a>
                        </li>
                        <li>
                            <a href="#">Travel</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </div>


                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Contact Details</span>
                    <span className="phone">+076 063 004</span>
                    <span className="email">ursu.maxim2004@gmail.com</span>
                </div>
            </div>
        </div>
    )
};

export default Footer