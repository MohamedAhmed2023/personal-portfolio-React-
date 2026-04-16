import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer() {
    return (
        <>

            <div className="Footer">
                <div className="left-Footer">
                    <h3>Mohamed Alkomali</h3>
                    <p>Results-driven Software Engineer specializing in MERN stack development, with hands-on experience in building scalable and user-focused web applications using React.js, Node.js, Express.js, and MongoDB. Passionate about clean code, performance optimization, and delivering high-quality end-to-end solutions.

                    </p>
                </div>
                <div className="right-Footer">
                    <h3>SOCIAL</h3>
                    <div className="icon-Footer">
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
                </div>
            </div >
            <div className="lower-Footer">
                <p>Powerded By Mohamed Alkomali</p>
            </div>
        </>
    )
}


export default Footer;