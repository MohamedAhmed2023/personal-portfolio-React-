import Mohamed from "../images/WhatsApp_Image_2025-05-20_at_20.25.18_a77f0696-removebg-preview (1).png"
import CV from "./MyCV/Mohamed_Ahmed_Web_Egy.pdf"
import "./HomePage.css"
import Experience from "../experience/Experience";
import HeadingText from "../HeadingText";
import 'animate.css/animate.min.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import Reviews from "../review/Review";


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
                        <p>Results-driven Software Engineer specializing in MERN stack development, with hands-on experience in building scalable and user-focused web applications using React.js, Node.js, Express.js, and MongoDB. Passionate about clean code, performance optimization, and delivering high-quality end-to-end solutions.

                        </p>
                        <a href={CV} download="Mohamed AlkomaliCv">
                            <div className="icon-Home">
                                <a href="https://github.com/MohamedAhmed2023">
                                    <GitHubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-alkomali/" alt="">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://wa.me/971505129022" alt="Phone Number">
                                    <LocalPhoneIcon />
                                </a>

                            </div>
                            <button className="home-Btn" type="button">Download My Cv</button>
                        </a>
                    </div>
                    <img src={Mohamed} alt="Mohamed Alkomali" className="profile-image" />
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
                                I'm a Software Engineer specialized in Full Stack web development using the MERN Stack, and a graduate of Sinai University, Faculty of Information Technology & Computer Science.
                                I work as a Software Engineering Instructor, delivering practical training focused on frontend and backend development through real-world projects.

                                I have strong experience in building scalable, user-friendly web applications, covering both frontend and backend development. I focus on writing clean, maintainable code and creating high-performance applications using modern technologies.
                            </p>
                            <a href="#contactSection">
                                <button type="button">Contact</button>
                            </a>
                        </div>
                        <div data-aos="zoom-in-up" className="right-content">
                            <h2>My Skills</h2>
                            <div className="skills-container">
                                <div className="frontend-skills">
                                    <h3>🎨 Frontend Development</h3>
                                    <ul>
                                        <li>HTML, CSS, JavaScript</li>
                                        <li>React.js</li>
                                        <li>Responsive Design, UI/UX Principles</li>
                                    </ul>
                                </div>

                                <div className="backend-skills">
                                    <h3>⚙️ Backend Development</h3>
                                    <ul>
                                        <li>Node.js & Express.js</li>
                                        <li>MongoDB & Database Design</li>
                                        <li>RESTful APIs Development</li>
                                        <li>Authentication & Authorization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Services />
                <Experience />
                {/* <HeadingText
                    title="Student Reviews"
                    discribions="Front End Developer And UI/UX Designer Student at Sinai University, Faculty of Information Technology"
                /> */}
                {/* <Reviews /> */}
                <HeadingText title="Projects" />
                <div id="ProjectSection" className=" container">
                </div>
            </div >
        </>
    )
}

export default HomePage;