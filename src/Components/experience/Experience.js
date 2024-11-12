
import "./Experience.css"
import HeadingText from "../HeadingText";
import nile from "../images/dpe.jpg"
import dpe from "../images/nile.jpg"
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
                    <img src={nile} alt=""></img>
                    <h2>Front end developer</h2>
                    <span>2023 Nov – 2024 Feb</span> <p>Nile
                        University , El Sheikh Zayed, Egypt</p>
                    <p>I worked as a Front-End Developer at NilePreneurs and Nile University. During this time, I contributed to the development of an Admin Panel using React.js for Nile University.</p>

                </div>
                <div data-aos="flip-left" className="experience-right">
                    <img src={dpe} alt=""></img>
                    <h2>Front end developer</h2>
                    <span>2023 Feb – 2023 May</span>
                    <p>Remotely</p>
                    <p>Front end developer internship provided by the Digital Pathways For Employment - DPE During the training period, I took on many tasks, and we created a personal portfolio and the final project.</p>

                    {/* <a href={DpeCert} download="DPE-Certificate">
                        <button className="cert-btn" type="button">Certificate</button>
                    </a> */}
                </div>
            </div>
        </>
    )
}

export default Experience;