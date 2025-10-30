import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { FaHotel, FaBuilding, FaTools } from "react-icons/fa";
import Aurora from "../ReactBits/Backgrounds/Aurora";

const categories = [
    {
        title: "Hotelreinigung & Housekeeping",
        description:
            "Von der Zimmerreinigung bis zur Spülküche – perfekte Hygiene und effiziente Abläufe in jedem Bereich Ihres Hotels.",
        icon: FaHotel,
        url: "/dienstleistungen/hotel",
        color: "from-blue-600 to-blue-400",
    },
    {
        title: "Professionelle Gebäudereinigung",
        description:
            "Büros, Gewerbeflächen, Bauendreinigung und Spezialreinigungen – wir lassen Ihre Immobilien glänzen.",
        icon: FaBuilding,
        url: "/dienstleistungen/gebaeude",
        color: "from-gray-700 to-gray-500",
    },
    {
        title: "Renovierung, Reparatur & Instandhaltung",
        description:
            "Maler-, Spachtel- und Trockenbauarbeiten sowie Bodenverlegung und kleinere Reparaturen.",
        icon: FaTools,
        url: "/dienstleistungen/renovierung",
        color: "from-yellow-600 to-yellow-400",
    },
];

export default function ServiceCategories({ content }) {
    return (
        <section
            id="services"
            className="relative py-24 bg-transparent"
            style={{ isolation: "isolate" }}
        >
            <div className="absolute inset-0 z-0 mix-blend-screen pointer-events-none">
                <Aurora
                    className="w-full h-full"
                    colorStops={["#0894D7", "#2967EC", "#0284C7"]}
                    blend={0}
                    amplitude={0.65}
                    speed={0.6}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white">
                        {content.section_services ||
                            "Unser breites Leistungsspektrum"}
                    </h2>
                    <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
                        Wir bieten schlüsselfertige Lösungen für alle
                        Anforderungen Ihrer Einrichtungen und Gebäude – mit
                        deutscher Präzision und Qualität.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                whileHover={{ scale: 1.03 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Üst renkli bar */}
                                <div
                                    className={`h-2 bg-gradient-to-r ${cat.color}`}
                                ></div>

                                {/* İçerik */}
                                <div className="p-8 flex flex-col items-center text-center">
                                    <div
                                        className={`p-4 bg-gradient-to-r ${cat.color} rounded-full text-white shadow-md mb-6 transition-transform duration-300 group-hover:rotate-6`}
                                    >
                                        <Icon size={36} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition">
                                        {cat.title}
                                    </h3>

                                    <p className="text-gray-600 flex-grow mb-6">
                                        {cat.description}
                                    </p>

                                    <Link
                                        href={cat.url}
                                        className="text-blue-600 font-semibold hover:text-blue-800 transition duration-150 flex items-center justify-center"
                                    >
                                        Mehr erfahren
                                        <motion.svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            whileHover={{ x: 4 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </motion.svg>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
