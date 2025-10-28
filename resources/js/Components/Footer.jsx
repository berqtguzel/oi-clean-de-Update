// resources/js/Components/Footer.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer({ content }) {
    return (
        <footer className="bg-blue-950 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-blue-800 pb-10">
                    {/* 1. Logo & Beschreibung */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-2">
                        <div className="text-3xl font-bold mb-4">
                            O&amp;I CLEAN
                        </div>
                        <p className="text-blue-200 text-sm max-w-sm">
                            {content.footer_title} Mit über 25 Jahren Erfahrung
                            bieten wir integrierte Lösungen für Reinigung und
                            Instandhaltung in der Hotellerie und für gewerbliche
                            Anlagen.
                        </p>
                    </div>

                    {/* 2. Nützliche Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 pb-1 inline-block">
                            Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/uber-uns"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Über uns
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/karriere"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Karriere
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Häufig gestellte Fragen (FAQ)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/datenschutz"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Datenschutzhinweise
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Leistungen */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 pb-1 inline-block">
                            Leistungen
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/dienstleistungen/hotel"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Hotelreinigung
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dienstleistungen/gebaeude"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Gebäudereinigung
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dienstleistungen/renovierung"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Renovierung & Instandsetzung
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dienstleistungen"
                                    className="text-blue-200 hover:text-white transition"
                                >
                                    Alle Leistungen
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Kontakt */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 pb-1 inline-block">
                            Kontakt
                        </h4>
                        <ul className="space-y-3 text-sm text-blue-200">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-400 flex-shrink-0" />
                                <span>
                                    Spaldingstr. 77–79, 20097 Hamburg,
                                    Deutschland
                                </span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-3 text-yellow-400" />
                                <a
                                    href="tel:+494046633519"
                                    className="hover:text-white transition"
                                >
                                    +49 (0)40 46 63 35 19
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-yellow-400" />
                                <a
                                    href="mailto:info@oi-clean.de"
                                    className="hover:text-white transition"
                                >
                                    info@oi-clean.de
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm text-blue-300">
                    © {new Date().getFullYear()} O&amp;I CLEAN group GmbH. Alle
                    Rechte vorbehalten. |{" "}
                    <Link href="/impressum" className="hover:underline">
                        Impressum
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
