import React from "react";
import "./Questions.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowDownCircle } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';

function Accordions() {
    return (
        <div className="accordionContainer">
            <Accordion>
                <Accordion.Item eventKey="0" >
                    <div id="title" className="flex">
                    <Accordion.Header>How do I choose the right travel destination for me ?</Accordion.Header>
                    </div>
                    
                    <Accordion.Body >
                        Consider your interests, buget, desired experiences, and the type of environment you enjoy.
                        Research destinations that align with your preferences and offer attractions or activities you find appealing.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Accordions;