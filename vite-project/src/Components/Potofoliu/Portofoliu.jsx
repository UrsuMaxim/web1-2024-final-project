import React from "react";
import "./Portofoliu.css";

import icon1 from '../../Assets/icon1.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';
import image from "../../Assets/image.jpg";


const Portofoliu = () => {
    return (
        <div className="portofoliu section container">
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3>Why Should You Choose Us</h3>
                        <p>
                            We have extensive knowledge and experience in the travel industry.
                        </p>
                    </div>

                    <div className="grid">
                        <div className="singlePortofoliu flex">
                            <div className="iconDiv">
                                <img src={icon1} alt="Icon image" />
                            </div>

                            <div className="infor">
                                <h4>Safety and support</h4>
                                <p>
                                    Our top priority is the safety and well-being of our clients.
                                    We maintain high safety standards and have emergency support available during the trip.
                                </p>
                            </div>








                        </div>

                        <div className="singlePortofoliu flex">
                            <div className="iconDiv">
                                <img src={icon2} alt="Icon image" />
                            </div>

                            <div className="infor">
                                <h4>Diverse Range of Destination</h4>
                                <p>
                                    Whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
                                </p>
                            </div>

                            <div className="singlePortofoliu flex">
                                <div className="iconDiv">
                                    <img src={icon3} alt="Icon image" />
                                </div>

                                <div className="infor">
                                    <h4>24/7 Customer Support</h4>
                                    <p>
                                        Our dedicated customer support team is available round the clock to address any queries or concern before, during, and after the trip.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="rightContent">
                    <img src={image} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default Portofoliu
