import React, { useEffect, useState } from "react";
import "./Questions.css";
import Accordion from "./Accordion";
import questionsData from "./questions.json";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Questions = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [activeItems, setActiveItems] = useState({});
    useEffect(() => {
        const initialActiveItems = {};
        questionsData.forEach(question => {
            initialActiveItems[question.title] = false;
        });
        setActiveItems(initialActiveItems);
    }, []);

    const handleSetActive = (title) => {
        setActiveItems((prevState) => {
            const newActiveItems = { ...prevState };

            // Dacă elementul curent este deja deschis, îl închidem
            if (newActiveItems[title]) {
                newActiveItems[title] = false;
            } else {
                // Dacă elementul curent este închis, îl deschidem
                newActiveItems[title] = true;
                // Închidem orice alt element care este deschis
                Object.keys(newActiveItems).forEach((key) => {
                    if (key !== title) {
                        newActiveItems[key] = false;
                    }
                });
            }

            return newActiveItems;
        });
    };

    return (
        <div className="questions section container">
            <div className="secHeading">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="secContainer grid">
                <div className="accordion grid">
                    {questionsData.map((question) => (
                        <Accordion 
                            key={question.title} // Cheia unică
                            title={question.title}
                            desc={question.desc}
                            active={activeItems[question.title]}
                            setActive={() => handleSetActive(question.title)}
                        />
                    ))}
                </div>

                <div className="form">
                    <div className="secHeading">
                        <h4>Do you have any specific question?</h4>
                        <p>
                            Please fill the form below and own dedicated team will get in touch with you as soon as possible.
                        </p>
                    </div>

                    <div className="formContent grid">
                        <input type="email" placeholder="Enter email address" />
                        <textarea placeholder="Enter your question here"></textarea>
                        <button className="btn">Submit Inquiry</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;