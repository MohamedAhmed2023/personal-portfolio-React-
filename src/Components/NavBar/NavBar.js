import React, { useState } from "react";
import "./NavBar.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'animate.css/animate.min.css';

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg animate__animated animate__fadeInDown animate__slow">
                <div className="container-fluid">
                    <div className="NavLogo">
                        <a className="navbar-brand" href="/">Mohamed Alkomali</a>
                    </div>
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#AboutSection">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#experiencesection">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#ProjectSection">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contactSection">Contact</a>
                            </li>
                        </ul>
                        <div className="icon-navbar">
                            <a href="https://github.com/MohamedAhmed2023">
                                <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/mohamed-alkomali/">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="NavLogoSideBar">
                    <a className="navbar-brand" href="/">Mohamed Alkomali</a>
                </div>
                <ul className="sidebar-nav">
                    <li><a href="/#">Home</a></li>
                    <li><a href="#AboutSection">About</a></li>
                    <li><a href="#experiencesection">Experience</a></li>
                    <li><a href="#ProjectSection">Projects</a></li>
                    <li><a href="#contactSection">Contact</a></li>
                </ul>
                <div className="icon-navbar">
                    <a href="https://github.com/MohamedAhmed2023">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-alkomali/">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
    );
}

export default NavBar;
