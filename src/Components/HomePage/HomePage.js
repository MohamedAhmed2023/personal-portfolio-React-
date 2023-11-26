import Mohamed from "../images/Mohamed.jpg"
import CV from "./MyCV/mohamed Ahmed CV..pdf"
import "./HomePage.css"
import HeadingText from "../HeadingText";
function HomePage() {
    return (
        <>
            <div className="container">
                <div className="container-home">
                    <div className="home-content">
                        <img src={Mohamed} alt="mohamed ahmed"></img>
                        <h2>Mohamed Alkomali</h2>
                        <p>Front End Developer And UI\UX Designer Student at Sinai University, Faculty of Information Technology</p>
                        <a href={CV} download="Mohamed AlkomaliCv">
                            <button className="home-Btn" type="button">Download My Cv</button>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <HeadingText title="About Me" discribions="Front End Developer And UI\UX Designer Student at Sinai University, Faculty of Information Technology" />
                    <div id="AboutSection" className="about-content">
                        <div className="left-content">
                            <h2>Get to know me!</h2>
                            <p>I'm mohamed Front End Developer And UI\UX Designer Student at Sinai University, Faculty of Information Technology
                                understand HTML,CSS and Javascript,React, extremely desire for challenging projects and also learning opportunaties Looking for internship or work</p>
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
                                <div>GIT</div>
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
                <HeadingText title="Projects" />
                <div id="ProjectSection" className=" container">
                </div>
            </div >

        </>
    )
}

export default HomePage;