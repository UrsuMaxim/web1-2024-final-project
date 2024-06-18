import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Questions.css";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Accordion = ({ title, desc, active, setActive }) => {
    return (
        <div className="accordionContainer">
            <span className={(active ? 'activeTitle' : "") + " title" + " flex"}>
                {title}
                <span onClick={() => setActive(title)}>
                    {active ? (
                        <BsArrowDownCircle className="icon" />
                        
                    ) : (
                        <BsArrowUpCircle className="icon" />
                    )}
                </span>
            </span>
            <p className={(active ? "show" : "") + " description"}>
                {desc}
            </p>
        </div>
    );
}

export default Accordion;
