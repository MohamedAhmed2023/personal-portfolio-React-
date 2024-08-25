import React from "react";
import "./CardFilter.css"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Card({ item }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <div data-aos="fade-up" className="card-perant">
                {item.map((val) => (
                    <div key={val.id} className="card">
                        <img src={val.image} alt={val.title} className="card__image" />
                        <div className="card__overlay">
                            <div className="overlay__text">
                                <h3>{val.title}</h3>
                                <div className="icon-container">
                                    <a href={val.githubHref} className="icon-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href={val.href} className="icon-link" aria-label="View" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Card;