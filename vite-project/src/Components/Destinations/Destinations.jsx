import React, { useEffect, useState } from "react";
import "./Destinations.css";
import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarDateFill, BsFillCreditCardFill } from 'react-icons/bs';
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from 'react-icons/ti';

import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.png';
import image4 from '../../Assets/image4.jpg';
import image5 from '../../Assets/image5.jpg';
import image6 from '../../Assets/image6.jpg';
import image7 from '../../Assets/image7.jpg';
import image8 from '../../Assets/image8.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const destinations = [ 
    { id: 1, img: image1, name: 'Faroe Island', location: 'Denmark', rating: 4.6, category: 'Nature', price: 1000, date: '2024-07-15' },
    { id: 2, img: image2, name: 'Seychelles Island', location: 'Indian Ocean', rating: 4.7, category: 'Beach', price: 2000, date: '2024-08-20' },
    { id: 3, img: image3, name: 'Niagara Falls', location: 'Niagara', rating: 4.3, category: 'Nature', price: 1500, date: '2024-09-10' },
    { id: 4, img: image4, name: 'Mount Fuji', location: 'Japan', rating: 4.8, category: 'Mountain', price: 3000, date: '2024-10-05' },
    { id: 5, img: image5, name: 'Machu Picchu', location: 'Peru', rating: 4.4, category: 'Mountain', price: 2500, date: '2024-11-15' },
    { id: 6, img: image6, name: 'The Acropolis', location: 'Athens', rating: 4.5, category: 'Recommended', price: 1200, date: '2024-12-25' },
    { id: 7, img: image7, name: 'Pyramids of Giza', location: 'Egypt', rating: 4.6, category: 'Recommended', price: 1800, date: '2025-01-30' },
    { id: 8, img: image8, name: 'Great Wall of China', location: 'China', rating: 4.9, category: 'Recommended', price: 2200, date: '2025-02-20' },
];

const Destinations = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [date, setDate] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setShowNoResults(false);
    };

    const handleSearch = () => {
        const filteredDestinations = destinations.filter(destination => {
            return (
                (selectedCategory === 'All' || destination.category === selectedCategory) &&
                (!location || destination.location.toLowerCase().includes(location.toLowerCase())) &&
                (!budget || destination.price >= parseFloat(budget)) &&
                (!date || destination.date >= date)
            );
        });

        setSearchResults(filteredDestinations);
        setShowNoResults(filteredDestinations.length === 0);
    };

    const clearFilters = () => {
        setLocation('');
        setBudget('');
        setDate('');
        setSelectedCategory('All');
        setSearchResults([]);
        setShowNoResults(false);
    };

    return (
        <div className="destination section container ">
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText" data-aos='fade-up'>EXPLORE NOW</span>
                    <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
                    <p data-aos='fade-up'>Fill in the fields below to find the best spot for your next tour.</p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex" data-aos='fade-up'>
                        <MdLocationPin className='icon' />
                        <input 
                            type="text" 
                            placeholder="Location" 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="inputField flex" data-aos='fade-up'>
                        <BsFillCreditCardFill className='icon' />
                        <input 
                            type="text" 
                            placeholder="Budget" 
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                        />
                    </div>

                    <div className="inputField flex" data-aos='fade-up'>
                        <BsFillCalendarDateFill className='icon' />
                        <input 
                            type="text" 
                            placeholder="Date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <button className="btn flex" data-aos='fade-up' onClick={handleSearch}>
                        <BiSearchAlt className="icon" />Search
                    </button>
                </div>

                <div className="secMenu">
                    <ul className="flex" data-aos='fade-up'>
                        {['All', 'Recommended', 'Beach', 'Park', 'Nature', 'Mountain'].map(category => (
                            <li 
                                key={category} 
                                className={selectedCategory === category ? 'active' : ''} 
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {showNoResults && (
                    <p className="noResults" data-aos='fade-up'>No destinations found. Please adjust your search criteria.</p>
                )}

                <div className="destinationContainer grid">
                    {(searchResults.length === 0 && !showNoResults ? destinations : searchResults).map(destination => (
                        <div className="singleDestination" key={destination.id} data-aos='fade-up'>
                            <div className="imgDiv">
                                <img src={destination.img} alt="Destination" />
                                <div className="descInfo flex">
                                    <div className="text">
                                        <span className="name">{destination.name}</span>
                                        <p className="flex">
                                            <TiLocation className='icon' />
                                            {destination.location}
                                        </p>
                                    </div>
                                    <span className="rating">{destination.rating}</span>
                                    <span className="price">${destination.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
