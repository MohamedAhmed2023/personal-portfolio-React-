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
                    <h2>Frontend Development</h2>
                    <p>I specialize in creating visually appealing and responsive user interfaces website. Skilled in HTML, CSS, JavaScript, and frameworks like React.js, I focus on delivering seamless, interactive experiences for end-users.</p>
                </div>

                {/* Backend Card */}
                <div data-aos="flip-down" className="ServicesCard">
                    <img src={img1} alt="Backend Development" />
                    <h2>Backend Development</h2>
                    <p>Node.js, Express.js, and MongoDB, I build robust and secure server-side applications that manage data, user authentication, and APIs, providing a solid foundation for scalable web applications.</p>
                </div>
            </div>
        </>
    )
}

export default Services;