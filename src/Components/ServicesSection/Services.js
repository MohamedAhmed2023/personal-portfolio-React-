import React from "react";
import "./Services.css"
import HeadingText from "../HeadingText";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "./coding.png"
import img11 from "./web-design.png"



function Services() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <HeadingText title="Services" />
            <div className="Services">
                {/* Frontend Card */}
                <div data-aos="flip-down" className="ServicesCard">
                    <img src={img11} alt="Frontend Development" />
                    <h2>Web Development</h2>
                    <p>I specialize in creating visually appealing and responsive user interfaces website. Skilled in HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, and frameworks like React.js, I focus on delivering seamless, interactive experiences for end-users.</p>
                </div>

                {/* Backend Card */}
                <div data-aos="flip-down" className="ServicesCard">
                    <img src={img1} alt="Backend Development" />
                    <h2> Information Technology Instructor</h2>
                    <p>At Tamkeen, I lead specialized training programs in web development, software engineering, data analysis, and AI.</p>
                </div>
            </div>
        </>
    )
}

export default Services;