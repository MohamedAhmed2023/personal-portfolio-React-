import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <>

            <div className="Footer">
                <div className="left-Footer">
                    <h3>Mohamed Alkomali</h3>
                    <p>software engineer, and i work as a mern stack developer graduated from sinai university, faculty of information technology & computer science </p>
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