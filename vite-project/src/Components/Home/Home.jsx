import React, {useEffect} from "react";
import "./Home.css";
import Video from '../../Assets/homeBg.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";

import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.png';
import image4 from "../../Assets/image4.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({duration:2000})
    },[])

    return (
        <div className="Home">
            <div className="videoBg">
                <video src={Video} autoPlay loop muted></video>
            </div>

            <div className="sectionText">
                <h1 data-aos = 'fade-up'>Unlock Tour Travel Dreams With Us!</h1>
                <p data-aos = 'fade-up'>
                    Discover the world's most adventurous nature, life is so short for a trip.
                </p>
                <button className="btn flex" data-aos = 'fade-up'>GET STARTED <AiOutlineSwapRight className="icon" /></button>
            </div>

            <div className="popularPlaces">
                <div className="content">
                    <h3 data-aos = 'fade-up'>Popular Places</h3>
                    <div className="images flex" data-aos = 'fade-up'>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home