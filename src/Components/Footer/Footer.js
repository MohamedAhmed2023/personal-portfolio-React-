import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return (
        <>

            <div className="Footer">
                <div className="left-Footer">
                    <h3>Mohamed Alkomali</h3>
                    <p>software engineer, and I work as a frontend developer graduated from Sinai University, Faculty of Information Technology</p>
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
                        <a href="https://www.facebook.com/profile.php?id=100007754079369" alt="">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com/mohamed_alkomali/" alt="">
                            <InstagramIcon />
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