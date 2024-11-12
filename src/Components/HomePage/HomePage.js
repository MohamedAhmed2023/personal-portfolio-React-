import Mohamed from "../images/Code typing-amico.png"
import CV from "./MyCV/Mohamed-Ahmed-Ali-CV.pdf"
import "./HomePage.css"
import Experience from "../experience/Experience";
import HeadingText from "../HeadingText";
import 'animate.css/animate.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
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
                        <p>software engineer, and i work as a mern stack developer graduated from sinai university, faculty of information technology & computer science</p>
                        <a href={CV} download="Mohamed AlkomaliCv">
                            <div className="icon-Home">
                                <a href="https://github.com/MohamedAhmed2023">
                                    <GitHubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-alkomali/" alt="">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100007754079369" alt="">
                                    <FacebookIcon />
                                </a>
                                <a href="https://www.instagram.com/mohamed_alkomali/" alt="">
                                    <InstagramIcon />
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
                                I am a software engineer working as a MERN stack developer with a
                                strong background in designing and developing interactive, user-friendly
                                web applications. Proficient in HTML, CSS, and JavaScript, with expertise
                                in modern frontend frameworks like React.js and backend technologies
                                like Node.js, Express.js, and MongoDB. Skilled in Agile methodologies,
                                I am passionate about continuous learning and applying the latest technologies
                                and trends in full-stack development. I am an effective team player with
                                strong communication skills, focused on delivering scalable, efficient solutions.
                            </p>
                            <a href="#contactSection">
                                <button type="button">Contact</button>
                            </a>
                        </div>
                        <div data-aos="zoom-in-up" className="right-content">
                            <h2>My Skills</h2>
                            <div className="skills-container">
                                <div className="frontend-skills">
                                    <h3>Frontend Skills</h3>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React.js</li>
                                        <li>GraphQL API</li>
                                        <li>Bootstrap</li>
                                        <li>Redux Toolkit</li>
                                        <li>Responsive Web Design</li>
                                        <li>Git/GitHub</li>
                                    </ul>
                                </div>
                                <div className="backend-skills">
                                    <h3>Backend Skills</h3>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                        <li>RESTFUL API</li>
                                        <li>Data Structure</li>
                                        <li>Algorithms</li>
                                        <li>Object-Oriented Programming (OOP)</li>
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