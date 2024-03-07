import Mohamed from "../images/Programming-pana.png"
import CV from "./MyCV/Mohamed Alkomali Cv.pdf"
import "./HomePage.css"
import Experience from "../experience/Experience";
import HeadingText from "../HeadingText";
import 'animate.css/animate.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function HomePage() {
    return (
        <>
            <div className="container">
                <div className="container-home animate__animated animate__fadeInLeft animate__slow">
                    <div className="home-content">
                        <h2>Mohamed Alkomali</h2>
                        <p>Front End Developer And UI\UX Designer Student at Sinai University, Faculty of Information Technology</p>
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
                        <div className="left-content">
                            <h2>Get to know me!</h2>
                            <p>I'm front end developer creating website using ReactJs I have ability to write the
                                clean code using JavaScript and responsive UI using ReactJs , understand HTML, CSS and Javascript, ReactJs
                                extremely desire for challenging projects as well as stronge ability to commuicate and work in team effectively
                                , I'm looking for a job where my educational background, experience and skills can be fully utilized and
                                enhanced</p>
                            <a href="#contactSection"><button type="button">Contact</button></a>
                        </div>
                        <div className="right-content">
                            <h2>My Skills</h2>
                            <div className="perant-skills" >
                                <div>HTML5</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>bootstrap</div>
                                <div>React js</div>
                                <div>RESTFUL API</div>
                                <div>MongoDB</div>
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
                <Experience />
                <HeadingText title="Projects" />
                <div id="ProjectSection" className=" container">
                </div>

            </div >
        </>
    )
}

export default HomePage;