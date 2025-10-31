import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../../../css/LocationCard.css";

const LocationCard = ({ location, onHover, isActive }) => {
    return (
        <article
            className={`location-card ${isActive ? "active" : ""}`}
            onMouseEnter={onHover}
            onFocus={onHover}
        >
            <div className="location-card-media">
                <LazyLoadImage
                    src={location.image}
                    alt={`Reinigungsservice in ${location.city}`}
                    effect="blur"
                    className="location-card-image"
                    width={400}
                    height={300}
                />
                <div className="location-card-overlay">
                    <h2 className="location-card-title">{location.title}</h2>
                </div>
            </div>

            <div className="location-card-content">
                <div className="location-card-footer">
                    <a
                        href={location.link}
                        className="location-card-button"
                        aria-label={`Mehr über unsere Reinigungsservices in ${location.city} erfahren`}
                    >
                        Mehr erfahren
                        <svg
                            className="location-card-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default LocationCard;
