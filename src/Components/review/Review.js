import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./FeedbackImageSlider.css";

import img1 from "../images/reviews1.jpg";
import img2 from "../images/r2.jpg";
import img3 from "../images/r3.jpg";
import img4 from "../images/r4.jpg";
import img5 from "../images/r5.jpg";
import img6 from "../images/r6.jpg";
import img7 from "../images/r7.jpg";
import img8 from "../images/r8.jpg";
import img9 from "../images/11.jpg";
import img10 from "../images/r10.jpg";
import img13 from "../images/re13.jpg";


const images = [img1, img2, img3, img4, img13, img5, img6, img7, img9, img10, img8,];

export default function FeedbackImageSlider() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleChange = (newIndex) => {
        setFade(false);
        setTimeout(() => {
            setIndex(newIndex);
            setFade(true);
        }, 50);
    };

    const prev = () => handleChange(index === 0 ? images.length - 1 : index - 1);
    const next = () => handleChange(index === images.length - 1 ? 0 : index + 1);

    return (
        <div className="slider-container">
            <div className="slider-frame">
                <img
                    src={images[index]}
                    alt={`Slide ${index}`}
                    className={`slider-image ${fade ? "fade-in" : "fade-out"}`}
                />
                <button className="arrow left" onClick={prev}>
                    <FaChevronLeft />
                </button>
                <button className="arrow right" onClick={next}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
