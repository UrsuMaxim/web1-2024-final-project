import React from "react";
import "./Destinations.css";
import {MdLocationPin} from 'react-icons/md';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {BsFillCreditCardFill} from 'react-icons/bs';
import { BiSearchAlt } from "react-icons/bi";
import {TiLocation} from 'react-icons/ti';


import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.png';
import image4 from '../../Assets/image4.jpg';
import image5 from '../../Assets/image5.jpg';
import image6 from '../../Assets/image6.jpg';
import image7 from '../../Assets/image7.jpg';
import image8 from '../../Assets/image8.jpg';


const destination = [ 
    {
        id: 1,
        img: image1,
        name: 'Faroe Island',
        location: 'Denmark',
        rating: 4.6,

    },
    
    {
        id: 2,
        img: image2,
        name: 'Seychelles Island',
        location: 'Indian Ocean',
        rating: 4.7,

    },
    {
        id: 3,
        img: image3,
        name: 'Niagara Falls',
        location: 'Niagara',
        rating: 4.3,

    },
    {
        id: 4,
        img: image4,
        name: 'Mount Fuji',
        location: 'Japan',
        rating: 4.8,

    },
    {
        id: 5,
        img: image5,
        name: 'Machu Picchu',
        location: 'Peru',
        rating: 4.4,

    },

    {
        id: 6,
        img: image6,
        name: 'The Acropis',
        location: 'Athens',
        rating: 4.5,

    },

    {
        id: 7,
        img: image7,
        name: 'Pyramids of Giza',
        location: 'Egypt',
        rating: 4.6,

    },

    {
        id: 8,
        img: image8,
        name: 'Great Wall of China',
        location: 'China',
        rating: 4.9,

    },
]
    



const Destinations = () => {
    return (
        <div className="destination section container">
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText">
                        EXPLORE NOW
                    </span>
                    <h3>Find Your Dream Destination</h3>
                    <p>
                        Fill in the fields below to find the best spot for your next tour.
                    </p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex">
                        <MdLocationPin className='icon'/>
                        <input type="text" placeholder="Location" />
                    </div>

                    <div className="inputField flex">
                        <BsFillCreditCardFill className='icon'/>
                        <input type="text" placeholder="Buget" />
                    </div>

                    <div className="inputField flex">
                        <BsFillCalendarDateFill className='icon'/>
                        <input type="text" placeholder="Date" />
                    </div>

                    <button className="btn flex"> <BiSearchAlt className="icon" />Search</button>

                </div>
                <div className="secMenu">
                    <ul className="flex">
                        <li className="active">All</li>
                        <li>Recomended</li>
                        <li>Beach</li>
                        <li>Park</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                    </ul>
                </div>

                <div className="destinationContainer grid">
                    {destination.map(destination => {
                        return(
                            <div className="singleDestination" key={destination.id}>
                            <div className="imgDiv">
                                <img src={destination.img} alt="Destination Image" />
                            <div className="descInfo flex">
                                <div className="text">
                                    <span className="name">{destination.name}</span>
                                    <p className="flex">
                                   <TiLocation className='icon' />
                                        {destination.location}
                                    </p>
                                </div>
                           
                                <span className="rating">
                                   {destination.rating}
                                </span>
                            </div>
                            </div>
                        </div>
                        )
                    })}




                </div>
            </div>
        </div>
    );
}

export default Destinations