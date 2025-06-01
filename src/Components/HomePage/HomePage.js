import Mohamed from "../images/Code typing-amico.png"
import CV from "./MyCV/Mohamed-Ahmed-Ali-Dubai-Cv.pdf"
import "./HomePage.css"
import Experience from "../experience/Experience";
import HeadingText from "../HeadingText";
import 'animate.css/animate.min.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "../ServicesSection/Services"

function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <div className="container">
                <div data-aos="fade-up" className="container-home">
                    <div className="home-content">
                        <h2>Mohamed Alkomali</h2>
                        <p>I'm a Software Engineer specialized in MERN Stack development, and a graduate of Sinai University, Faculty of Information Technology & Computer Science.
                            I also work as an Information Technology Instructor, delivering practical training in web development, data analysis, and AI.</p>
                        <a href={CV} download="Mohamed AlkomaliCv">
                            <div className="icon-Home">
                                <a href="https://github.com/MohamedAhmed2023">
                                    <GitHubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-alkomali/" alt="">
                                    <LinkedInIcon />
                                </a>
                            </div>
                            <button className="home-Btn" type="button">Download My Cv</button>
                        </a>
                    </div>
                    <img src={Mohamed} alt="mohamed ahmed"></img>
                </div>
                <div className="container">
                    <HeadingText
                        title="About Me"
                        discribions="Front End Developer And UI/UX Designer Student at Sinai University, Faculty of Information Technology"
                    />
                    <div id="AboutSection" className="about-content">
                        <div data-aos="fade-up-right" className="left-content">
                            <h2>Get to know me!</h2>
                            <p>
                                I'm a Software Engineer specialized in MERN Stack development, and a graduate of Sinai University, Faculty of Information Technology & Computer Science.
                                I also work as an Information Technology Instructor, delivering practical training in web development, data analysis, and AI.

                                I have a strong background in designing and developing interactive, user-friendly web applications. Proficient in HTML, CSS, and JavaScript, with expertise in modern frontend frameworks like React.js and backend technologies including Node.js, Express.js, and MongoDB.
                            </p>
                            <a href="#contactSection">
                                <button type="button">Contact</button>
                            </a>
                        </div>
                        <div data-aos="zoom-in-up" className="right-content">
                            <h2>My Skills</h2>
                            <div className="skills-container">
                                <div className="frontend-skills">
                                    <h3>🖥 Web Development</h3>
                                    <ul>
                                        <li>HTML, CSS, JavaScript</li>
                                        <li>React.js, Node.js, Express.js, MongoDB</li>
                                        <li>RESTful APIs, Responsive Design, UI/UX Principles</li>
                                    </ul>
                                </div>

                                <div className="backend-skills">
                                    <h3>📊 Data Analysis</h3>
                                    <ul>
                                        <li>Data visualization</li>
                                        <li>Excel, SQL</li>
                                        <li>Microsoft Power BI</li>
                                        <li>Python Programming Language</li>
                                    </ul>
                                </div>
                                <div className="backend-skills">
                                    <h3>🤖 Artificial Intelligence</h3>
                                    <ul>
                                        <li>Machine Learning Fundamentals</li>
                                        <li>Python Libraries: TensorFlow</li>
                                        <li>Data preprocessing and feature engineering</li>
                                        <li>Model evaluation and optimization</li>
                                        <li>AI concepts: Neural Networks, NLP, Computer Vision</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Services />
                <Experience />
                <HeadingText title="Projects" />
                <div id="ProjectSection" className=" container">
                </div>

            </div >
        </>
    )
}

export default HomePage;