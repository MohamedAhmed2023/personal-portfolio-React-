import React from "react";
import "./NavBar.css"
import Mohamed from "./png/menu (1).png"
import Git from "./png/github-ico.png"
import Link from "./png/linkedin-ico.png"
import tew from "./png/twitter-ico.png"
import ins from "./png/yt-ico.png"
function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div className="NavLogo">
                        <a class="navbar-brand" href="/">Mohamed Alkomali</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={Mohamed} alt=""></img>
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
                                <a class="nav-link active" aria-current="page" href="#ProjectSection">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#contactSection">Contact</a>
                            </li>
                        </ul>
                        <div className="icon-navbar">
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
                </div>
            </nav>
        </>
    )
}

export default NavBar;