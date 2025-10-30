import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServicesGrid.css";
import { Head } from "@inertiajs/react";
import {
    FaHome,
    FaBroom,
    FaTemperatureHigh,
    FaPaintRoller,
    FaWindowMaximize,
    FaTools,
    FaBrush,
    FaCouch,
} from "react-icons/fa";

import LiquidEther from "../ReactBits/Backgrounds/LiquidEther";

// 🔹 Lazy load animasyonu
const useIntersectionObserver = (ref) => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [ref]);
};

const defaultServices = [
    {
        id: 1,
        title: "Wohnungsrenovierung",
        description:
            "Professionelle Renovierungsarbeiten für Ihr Zuhause mit höchster Qualität und Sorgfalt.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/services/wohnungsrenovierung",
        icon: FaHome,
    },
    {
        id: 2,
        title: "Wohnungsreinigung",
        description:
            "Gründliche und zuverlässige Reinigungsservices für ein sauberes und hygienisches Zuhause.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/wohnungsreinigung",
        icon: FaBroom,
    },
    {
        id: 3,
        title: "Wärmedämmung",
        description:
            "Energieeffiziente Dämmungslösungen für optimalen Wohnkomfort und Kosteneinsparung.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/warmedammung",
        icon: FaTemperatureHigh,
    },
    {
        id: 4,
        title: "Verputz – Verputzarbeiten",
        description:
            "Hochwertige Verputzarbeiten für perfekte Wandoberflächen und langanhaltende Qualität.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/verputzarbeiten",
        icon: FaPaintRoller,
    },
    {
        id: 5,
        title: "Türen und Fensterbau",
        description:
            "Maßgefertigte Türen und Fenster für mehr Komfort und Energieeffizienz.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/Wohnungsrenovierung.jpg",
        icon: FaWindowMaximize,
    },
    {
        id: 6,
        title: "Trockenbau – Wohnungsrenovierung.jpg",
        description:
            "Innovative Trockenbaulösungen für flexible Raumgestaltung und moderne Innenarchitektur.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/trockenbau",
        icon: FaTools,
    },
    {
        id: 7,
        title: "Teppichreinigung",
        description:
            "Professionelle Teppichreinigung für frische und hygienisch saubere Teppiche.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/teppichreinigung",
        icon: FaBrush,
    },
    {
        id: 8,
        title: "Teppich Verlegen",
        description:
            "Fachgerechtes Verlegen von Teppichen für ein perfektes Finish und lange Haltbarkeit.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/teppich-verlegen",
        icon: FaCouch,
    },
    {
        id: 9,
        title: "Tapezieren – Tapezierarbeiten",
        description:
            "Kreative Wandgestaltung durch professionelle Tapezierarbeiten.",
        image: "/images/Wohnungsrenovierung.jpg",
        link: "/services/tapezieren",
        icon: FaPaintRoller,
    },
];

const ServicesGrid = ({ services = defaultServices }) => {
    const gridRef = React.useRef(null);
    useIntersectionObserver(gridRef);

    // Eğer parent boş bir array verdiyse fallback olarak defaultServices kullan
    const servicesToRender =
        services && services.length ? services : defaultServices;

    // SEO için JSON-LD
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: servicesToRender.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.description,
            url: `https://oi-clean.de${service.link}`,
            provider: {
                "@type": "Organization",
                name: "O&I CLEAN group GmbH",
                image: "https://oi-clean.de/images/logo.svg",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Spaldingstr. 77–79",
                    addressLocality: "Hamburg",
                    postalCode: "20097",
                    addressCountry: "DE",
                },
            },
        })),
    };

    return (
        // 👉 Arka planı section içine sabitliyoruz
        <section
            className="services-section relative overflow-hidden"
            aria-labelledby="services-title"
        >
            <Head>
                <title>Unsere Leistungen - O&I CLEAN group GmbH</title>
                <meta
                    name="description"
                    content="Professionelle Reinigung, Renovierung und Gebäudemanagement in Hamburg. ★ Expertise ★ Deutsche Qualität ★ Zuverlässiger Service"
                />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>
            <div className="absolute inset-0 z-10 liquid-ether-bg" /* z-10 */>
                <LiquidEther
                    className="w-full h-full"
                    style={{ pointerEvents: "auto" }}
                    colors={["#085883", "#0C9FE2", "#2EA7E0"]}
                    mouseForce={35}
                    cursorSize={140}
                    isViscous={false}
                    viscous={25}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.6}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.4}
                    autoIntensity={1.6}
                    takeoverDuration={0.45}
                    autoResumeDelay={4000}
                    autoRampDuration={0.8}
                />
            </div>

            {/* İçerik */}
            <div className="services-container relative z-10">
                <div className="services-header">
                    <h2 id="services-title" className="services-title">
                        Leistungen
                    </h2>
                    <p className="services-subtitle">
                        Entdecken Sie unsere umfassenden Dienstleistungen für
                        Ihr Zuhause
                    </p>
                </div>

                <div ref={gridRef} className="services-grid">
                    {servicesToRender.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            link={service.link}
                            icon={service.icon}
                        />
                    ))}
                </div>

                <div className="services-cta">
                    <a
                        href="/kontakt"
                        className="services-contact-button"
                        aria-label="Jetzt Kontakt aufnehmen"
                    >
                        Kontaktiere Uns
                        <svg
                            className="services-arrow-icon"
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
        </section>
    );
};

export default ServicesGrid;
