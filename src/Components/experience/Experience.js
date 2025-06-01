
import "./Experience.css"
import HeadingText from "../HeadingText";
import Tamkeen from "../images/tamkeen.jpg"
import primeoscar from "../images/primeoscar.jpg"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <HeadingText title="Experience" />
            <div id="experiencesection" className="experience">
                <div data-aos="flip-right" className="experience-left">
                    <img src={Tamkeen} alt=""></img>
                    <h2>IT Instructor </h2>
                    <span>Apr 2025 – present </span> <p>Dubai, United Arab Emirates</p>
                    <p>At Tamkeen, I lead specialized training programs in web development, software engineering, data analysis, and AI.</p>
                </div>
                <div data-aos="flip-right" className="experience-left">
                    <img src={primeoscar} alt=""></img>
                    <h2>MERN Stack Developer</h2>
                    <span>Aug 2024 – present </span> <p>Dubai, United Arab Emirates</p>
                    <p>I worke as a MERN-Stack developer at Prime Oscar Tours. Develop and maintain scalable web applications using MongoDB, Express.js, React.js, and Node.js, ensuring a seamless booking experience for customers.</p>
                </div>
            </div>
        </>
    )
}

export default Experience;