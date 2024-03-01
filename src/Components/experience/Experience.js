
import "./Experience.css"
import HeadingText from "../HeadingText";
import nile from "../images/dpe.jpg"
import dpe from "../images/nile.jpg"
import DpeCert from "./certificate/Front-end-Bootcamp_Front-end-Web-Development-BootCamp_Mohamed-ahmed.pdf"
import NileCert from "./certificate/Mohamed Ahmed Ali_DPE Certificate (1).pdf"
function Experience() {
    return (
        <>
            <HeadingText title="Experience" />
            <div className="experience">
                <div className="experience-left">
                    <img src={nile} alt=""></img>
                    <h2>Front end developer</h2>
                    <span>2023 Nov – 2024 Feb</span> <p>Nile
                        University , El Sheikh Zayed, Egypt</p>
                    <p>Front end developer internship provided by the NilePreneurs and Nile
                        University throughout the internship duration, we work develop Admin Panel
                        byReactJs for Nile University</p>
                    <a href={NileCert} download="Nile-Certificate">
                        <button className="cert-btn" type="button">Certificate</button>
                    </a>
                </div>
                <div className="experience-right">
                    <img src={dpe} alt=""></img>
                    <h2>Front end developer</h2>
                    <span>2023 Feb – 2023 May</span>
                    <p>Remotely</p>
                    <p>Front end developer internship provided by the Digital Pathways For Employment - DPE During the training period, I took on many tasks, and we created a personal portfolio and the final project.</p>

                    <a href={DpeCert} download="DPE-Certificate">
                        <button className="cert-btn" type="button">Certificate</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Experience;