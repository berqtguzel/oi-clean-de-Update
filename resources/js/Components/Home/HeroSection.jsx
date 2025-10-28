// resources/js/Components/Home/HeroSection.jsx
import React from "react";
import { Link } from "@inertiajs/react";

export default function HeroSection({ content }) {
    return (
        <div className="relative h-[600px] overflow-hidden flex items-center justify-center text-white">
            {/* 🎬 Hintergrundvideo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/headerVideo.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
            </video>

            {/* 🖋️ Dunkle Overlay-Ebene */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* 🌟 Inhalt */}
            <div className="relative text-center z-10 p-4">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    {content.hero_title ||
                        "Umfassende Lösungen für Ihre Anlagen und Gebäude"}
                </h1>

                <p className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto">
                    Mit über 25 Jahren Erfahrung bieten wir maßgeschneiderte,
                    integrierte Lösungen für Reinigung, Pflege und
                    Instandhaltung.
                </p>

                <div className="mt-10 space-x-4">
                    <Link
                        href="/dienstleistungen"
                        className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300"
                    >
                        Unsere Leistungen entdecken
                    </Link>
                    <Link
                        href="/kontakt"
                        className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition duration-300"
                    >
                        Kontakt aufnehmen
                    </Link>
                </div>
            </div>
        </div>
    );
}
