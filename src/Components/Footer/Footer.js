import "./Footer.css"
import Git from "./png/github-ico.png"
import Link from "./png/linkedin-ico.png"
import tew from "./png/twitter-ico.png"
import ins from "./png/yt-ico.png"
function Footer() {
    return (
        <>

            <div className="Footer">
                <div className="left-Footer">
                    <h3>Mohamed Alkomali</h3>
                    <p>Front End Developer And UI\UX Designer Student at Sinai University,<br /> Faculty of Information Technology</p>
                </div>
                <div className="right-Footer">
                    <h3>SOCIAL</h3>
                    <div className="icon">
                        <a href="https://github.com/MohamedAhmed2023">
                            <img href="https://github.com/MohamedAhmed2023" src={Git} alt="">
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/mohamed-alkomali/" alt="">
                            <img src={Link} alt=""></img>
                        </a>
                        <img src={tew} alt=""></img>
                        <img src={ins} alt=""></img>
                    </div>
                </div>
            </div >
            <div className="lower-Footer">
                <p>Powerded By Mohamed Alkomali</p>
            </div>
        </>
    )
}


export default Footer;