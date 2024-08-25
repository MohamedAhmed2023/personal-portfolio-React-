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
                        <p>Software Engineer, And I Work as A Frontend Developer Graduated From Sinai University, Faculty Of IInformation Technology & Computer Science </p>
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
                    <HeadingText title="About Me" discribions="Front End Developer And UI\UX Designer Student at Sinai University, Faculty of Information Technology" />
                    <div id="AboutSection" className="about-content">
                        <div data-aos="fade-up-right" className=" left-content">
                            <h2>Get to know me!</h2>
                            <p>I'm a software engineer and I work as frontend developer with a strong background in designing and developing responsive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frontend frameworks like React.js. I am skilled in Agile methodologies and passionate about continuous learning and the application of the latest technologies and trends in frontend development. Excellent team player with strong communication skills</p>
                            <a href="#contactSection"><button type="button">Contact</button></a>
                        </div>
                        <div data-aos="zoom-in-up" className="right-content">
                            <h2>My Skills</h2>
                            <div className="perant-skills" >
                                <div>HTML5</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>bootstrap</div>
                                <div>React js</div>
                                <div>RESTFUL API</div>
                                <div>MongoDB</div>
                                <div>redux toolkit</div>
                                <div>Data Structure</div>
                                <div>Algorithmes</div>
                                <div>GraphQl API</div>
                                <div>GIT\Hub</div>
                                <div>presentation skills</div>
                                <div>Responsive Web Design</div>
                                <div>Object-Oriented Programming (OOP)</div>
                                <div>fundamental of C++</div>
                                <div>fundamental of python</div>
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