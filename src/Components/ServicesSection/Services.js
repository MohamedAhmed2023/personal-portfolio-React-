import React from "react";
import "./Services.css"
import HeadingText from "../HeadingText";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "./coding.png"
import img11 from "./web-design.png"
import img111 from "./mobile-internet.png"



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
                <div data-aos="flip-down" className="ServicesCard">
                    <img src={img1} alt="webDevolopment"></img>
                    <h2>Web Development</h2>
                    <p>I create dynamic, robust, and scalable websites that help businesses thrive online. Utilizing the latest technologies, I build custom solutions to ensure your website is fast, and user-friendly.</p>
                </div>
                <div data-aos="flip-down" className="ServicesCard">
                    <img src={img111} alt=""></img>
                    <h2>Responsive Design</h2>
                    <p> today's multi-device world, having a responsive website is crucial. I ensure your website looks and performs perfectly on any device, whether it’s a desktop, tablet, or mobile phone. </p>
                </div>
                <div data-aos="flip-down" className="ServicesCard">
                    <img src={img11} alt=""></img>
                    <h2>UI/UX Design</h2>
                    <p>My design philosophy centers around creating intuitive and engaging user experiences. By understanding user behavior, I craft interfaces that are not only visually appealing but also highly functional.</p>
                </div>

            </div >
        </>
    )
}

export default Services;