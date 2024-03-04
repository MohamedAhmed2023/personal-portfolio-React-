import React from "react";
import "./NavBar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WidgetsIcon from '@mui/icons-material/Widgets';
import 'animate.css/animate.min.css';

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg animate__animated animate__fadeInDown animate__slow">
                <div class="container-fluid">
                    <div className="NavLogo">
                        <a class="navbar-brand" href="/">Mohamed Alkomali</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <WidgetsIcon />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#AboutSection">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#experiencesection">experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#ProjectSection">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#contactSection">Contact</a>
                            </li>
                        </ul>
                        <div className="icon-navbar">
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
                </div>
            </nav>
        </>
    )
}

export default NavBar;