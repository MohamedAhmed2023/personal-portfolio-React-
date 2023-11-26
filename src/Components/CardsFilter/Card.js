import React from "react";
import "./CardFilter.css"
function Card({ item }) {
    return (
        <>
            <div className="card-perant">
                {item.map((val) => (
                    <div key={val.id} className="card">
                        <img src={val.image} alt="" className="card__image"></img>
                        <div className="card__overlay">
                            <div className="overlay__text">
                                <h3> {val.title}</h3>
                                <a href={val.href} class="button">View</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card;