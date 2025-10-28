import "../../css/header.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import {
    FaHome,
    FaBuilding,
    FaBroom,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaChevronDown,
    FaChevronRight,
    FaPhoneAlt,
    FaBars,
    FaTimes,
    FaQuestionCircle,
} from "react-icons/fa";

function cx(...args) {
    return args.filter(Boolean).join(" ");
}

const BitsBackground = () => <div aria-hidden className="rbits-bg" />;

const Header = ({ currentRoute }) => {
    const [isTopBarVisible, setIsTopBarVisible] = useState(true);
    const [openMenu, setOpenMenu] = useState(false); // mobile drawer
    const [openDropdown, setOpenDropdown] = useState(null); // desktop root dropdown key
    const [openSubmenu, setOpenSubmenu] = useState(null); // nested submenu key
    const [mobileAccordions, setMobileAccordions] = useState({});
    const headerRef = useRef(null);

    useEffect(() => {
        const onDocClick = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenDropdown(null);
                setOpenSubmenu(null);
            }
        };
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, []);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpenDropdown(null);
                setOpenSubmenu(null);
                setOpenMenu(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const toggleMobileAccordion = (key) => {
        setMobileAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const navItems = [
        {
            name: "Startseite",
            route: "home",
            url: "/",
            icon: <FaHome aria-hidden="true" />,
        },
        {
            name: "Über uns",
            route: "about",
            url: "/uber-uns",
            icon: <FaBuilding aria-hidden="true" />,
            dropdownKey: "about",
            dropdown: [
                { name: "Über uns", url: "/uber-uns" },
                { name: "Qualitätsmanagement", url: "/qualitatsmanagement" },
                {
                    name: "Mitarbeiter Schulungen",
                    url: "/mitarbeiter-schulungen",
                },
                {
                    name: "Rechtliches",
                    submenuKey: "legal",
                    submenu: [
                        { name: "Datenschutzhinweise", url: "/datenschutz" },
                        { name: "Impressum", url: "/impressum" },
                        { name: "Stockfotos", url: "/stockfotos" },
                    ],
                },
                { name: "Häufig gestellte Fragen (FAQ)", url: "/faq" },
            ],
        },
        {
            name: "Reinigungsleistungen",
            route: "services",
            url: "/dienstleistungen",
            icon: <FaBroom aria-hidden="true" />,
            dropdownKey: "services",
            mega: {
                columns: [
                    {
                        title: "Gebäudereinigung",
                        items: [
                            {
                                name: "Unterhaltsreinigung",
                                url: "/dienstleistungen/unterhaltsreinigung",
                            },
                            {
                                name: "Büroreinigung",
                                url: "/dienstleistungen/buroreinigung",
                            },
                            {
                                name: "Glas- & Fensterreinigung",
                                url: "/dienstleistungen/fensterreinigung",
                            },
                        ],
                    },
                    {
                        title: "Spezialreinigung",
                        items: [
                            {
                                name: "Baureinigung",
                                url: "/dienstleistungen/baureinigung",
                            },
                            {
                                name: "Grundreinigung",
                                url: "/dienstleistungen/grundreinigung",
                            },
                            {
                                name: "Teppichreinigung",
                                url: "/dienstleistungen/teppichreinigung",
                            },
                        ],
                    },
                    {
                        title: "Hygiene & Sanitär",
                        items: [
                            {
                                name: "Sanitärreinigung",
                                url: "/dienstleistungen/sanitarreinigung",
                            },
                            {
                                name: "Desinfektionsservice",
                                url: "/dienstleistungen/desinfektion",
                            },
                            {
                                name: "Küchenhygiene",
                                url: "/dienstleistungen/kuchenhygiene",
                            },
                        ],
                    },
                    {
                        title: "Außenbereiche",
                        items: [
                            {
                                name: "Fassadenreinigung",
                                url: "/dienstleistungen/fassadenreinigung",
                            },
                            {
                                name: "Parkraumreinigung",
                                url: "/dienstleistungen/parkraum",
                            },
                            {
                                name: "Winterdienst",
                                url: "/dienstleistungen/winterdienst",
                            },
                        ],
                    },
                ],
                cta: {
                    label: "Alle Leistungen ansehen",
                    url: "/dienstleistungen",
                },
            },
        },
        {
            name: "Standorte",
            route: "locations",
            url: "/standorte",
            icon: <FaMapMarkerAlt aria-hidden="true" />,
        },
        {
            name: "Kontakt",
            route: "contact",
            url: "/kontakt",
            icon: <FaPaperPlane aria-hidden="true" />,
        },
    ];

    return (
        <header ref={headerRef} className="site-header">
            <BitsBackground />

            {/* TOP BAR */}
            {isTopBarVisible && (
                <div className="topbar">
                    <div className="container">
                        <div className="topbar__inner">
                            <div className="topbar__left">
                                <span className="topbar__phone">
                                    <FaPhoneAlt aria-hidden="true" />
                                    <a href="tel:+490000000">
                                        +49 000 0000 000
                                    </a>
                                </span>
                                <span className="topbar__tagline">
                                    Sauberkeit, auf die Sie sich verlassen
                                    können — 24/7 Service
                                </span>
                            </div>
                            <div className="topbar__right">
                                <Link
                                    href="/kontakt"
                                    className="btn btn--ghost"
                                >
                                    Termin vereinbaren
                                </Link>
                                <button
                                    className="btn btn--ghost btn--circle"
                                    aria-label="Top-Leiste ausblenden"
                                    onClick={() => setIsTopBarVisible(false)}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* MAIN NAV */}
            <div className="navwrap">
                <div className="container">
                    <div className="navwrap__inner">
                        <Link
                            href="/"
                            className="brand"
                            aria-label="Startseite"
                        >
                            <img
                                src="/images/logo/Logo.png"
                                alt="O&I CLEAN Logo"
                                className="brand__logo"
                            />
                        </Link>

                        {/* Desktop nav */}
                        <nav
                            className="nav nav--desktop"
                            aria-label="Hauptnavigation"
                        >
                            {navItems.map((item) => {
                                const isActive = currentRoute === item.route;
                                const hasDropdown =
                                    !!item.dropdown || !!item.mega;
                                const isOpen =
                                    openDropdown ===
                                    (item.dropdownKey || item.route);
                                const dropdownKey =
                                    item.dropdownKey || item.route;

                                return (
                                    <div
                                        key={item.route}
                                        className={cx(
                                            "nav__item",
                                            isActive && "is-active"
                                        )}
                                        onMouseEnter={() =>
                                            hasDropdown &&
                                            setOpenDropdown(dropdownKey)
                                        }
                                        onMouseLeave={() =>
                                            hasDropdown && setOpenDropdown(null)
                                        }
                                    >
                                        <Link
                                            href={item.url}
                                            className={cx(
                                                "nav__link",
                                                hasDropdown && "has-dropdown"
                                            )}
                                            aria-haspopup={
                                                hasDropdown || undefined
                                            }
                                            aria-expanded={
                                                hasDropdown ? isOpen : undefined
                                            }
                                        >
                                            <span className="nav__icon">
                                                {item.icon}
                                            </span>
                                            <span className="nav__label">
                                                {item.name}
                                            </span>
                                            {hasDropdown && (
                                                <FaChevronDown
                                                    className="nav__chev"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Link>

                                        {hasDropdown && isOpen && (
                                            <div
                                                className={cx(
                                                    "dropdown",
                                                    item.mega &&
                                                        "dropdown--mega"
                                                )}
                                                role="menu"
                                            >
                                                {item.mega ? (
                                                    <div className="mega">
                                                        {item.mega.columns.map(
                                                            (col, i) => (
                                                                <div
                                                                    className="mega__col"
                                                                    key={i}
                                                                >
                                                                    <div className="mega__title">
                                                                        {
                                                                            col.title
                                                                        }
                                                                    </div>
                                                                    <ul className="mega__list">
                                                                        {col.items.map(
                                                                            (
                                                                                link,
                                                                                j
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        j
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        href={
                                                                                            link.url
                                                                                        }
                                                                                        className="mega__link"
                                                                                    >
                                                                                        {
                                                                                            link.name
                                                                                        }
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        )}
                                                        <div className="mega__footer">
                                                            <p>
                                                                Benötigen Sie
                                                                Hilfe bei der
                                                                Auswahl?
                                                            </p>
                                                            <Link
                                                                href={
                                                                    item.mega
                                                                        .cta.url
                                                                }
                                                                className="btn btn--primary"
                                                            >
                                                                <FaBroom
                                                                    aria-hidden
                                                                />{" "}
                                                                {
                                                                    item.mega
                                                                        .cta
                                                                        .label
                                                                }
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="menu">
                                                        {item.dropdown.map(
                                                            (subItem, idx) => {
                                                                const hasSub =
                                                                    !!subItem.submenu;
                                                                const subKey =
                                                                    subItem.submenuKey ||
                                                                    `${dropdownKey}-sub-${idx}`;
                                                                const subOpen =
                                                                    openSubmenu ===
                                                                    subKey;
                                                                return (
                                                                    <div
                                                                        className="menu__item"
                                                                        key={
                                                                            idx
                                                                        }
                                                                        onMouseEnter={() =>
                                                                            hasSub &&
                                                                            setOpenSubmenu(
                                                                                subKey
                                                                            )
                                                                        }
                                                                        onMouseLeave={() =>
                                                                            hasSub &&
                                                                            setOpenSubmenu(
                                                                                null
                                                                            )
                                                                        }
                                                                    >
                                                                        {hasSub ? (
                                                                            <button
                                                                                type="button"
                                                                                className="menu__link has-sub"
                                                                                aria-haspopup
                                                                                onClick={() =>
                                                                                    setOpenSubmenu(
                                                                                        subKey
                                                                                    )
                                                                                }
                                                                                aria-expanded={
                                                                                    subOpen
                                                                                }
                                                                            >
                                                                                <span className="menu__label">
                                                                                    <FaQuestionCircle
                                                                                        className="menu__ico"
                                                                                        aria-hidden
                                                                                    />{" "}
                                                                                    {
                                                                                        subItem.name
                                                                                    }
                                                                                </span>
                                                                                <FaChevronRight
                                                                                    className="menu__chev"
                                                                                    aria-hidden
                                                                                />
                                                                            </button>
                                                                        ) : (
                                                                            <Link
                                                                                href={
                                                                                    subItem.url
                                                                                }
                                                                                className="menu__link"
                                                                            >
                                                                                {
                                                                                    subItem.name
                                                                                }
                                                                            </Link>
                                                                        )}

                                                                        {hasSub &&
                                                                            subOpen && (
                                                                                <div
                                                                                    className="submenu"
                                                                                    role="menu"
                                                                                >
                                                                                    {subItem.submenu.map(
                                                                                        (
                                                                                            inner,
                                                                                            j
                                                                                        ) => (
                                                                                            <Link
                                                                                                key={
                                                                                                    j
                                                                                                }
                                                                                                href={
                                                                                                    inner.url
                                                                                                }
                                                                                                className="submenu__link"
                                                                                            >
                                                                                                {
                                                                                                    inner.name
                                                                                                }
                                                                                            </Link>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="nav__cta">
                                <Link
                                    href="/angebot"
                                    className="btn btn--primary"
                                >
                                    <FaPaperPlane aria-hidden /> Angebot
                                    anfordern
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile trigger */}
                        <button
                            className="hamburger"
                            onClick={() => setOpenMenu(true)}
                            aria-label="Menü öffnen"
                        >
                            <FaBars size={22} />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DRAWER */}
            <div
                className={cx("drawer", openMenu && "is-open")}
                aria-hidden={!openMenu}
            >
                <div
                    className="drawer__backdrop"
                    onClick={() => setOpenMenu(false)}
                />
                <aside className="drawer__panel" role="dialog" aria-modal>
                    <div className="drawer__head">
                        <Link href="/" className="brand brand--sm">
                            <img
                                src="/images/logo/Logo.png"
                                alt="O&I CLEAN Logo"
                                className="brand__logo"
                            />
                        </Link>
                        <button
                            className="btn btn--icon"
                            onClick={() => setOpenMenu(false)}
                            aria-label="Menü schließen"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    <div className="drawer__body">
                        {navItems.map((item, idx) => {
                            const key = item.dropdownKey || item.route;
                            const hasDropdown = !!item.dropdown || !!item.mega;
                            const expanded = !!mobileAccordions[key];
                            return (
                                <div key={idx} className="acc">
                                    <button
                                        className="acc__toggle"
                                        aria-expanded={expanded}
                                        onClick={() =>
                                            hasDropdown
                                                ? toggleMobileAccordion(key)
                                                : setOpenMenu(false)
                                        }
                                    >
                                        <span className="acc__left">
                                            <span className="acc__icon">
                                                {item.icon}
                                            </span>
                                            {item.name}
                                        </span>
                                        <FaChevronDown
                                            className={cx(
                                                "acc__chev",
                                                expanded && "rot"
                                            )}
                                        />
                                    </button>
                                    {hasDropdown ? (
                                        <div
                                            className={cx(
                                                "acc__content",
                                                expanded && "open"
                                            )}
                                        >
                                            {item.mega ? (
                                                <div className="acc__mega">
                                                    {item.mega.columns.map(
                                                        (col, i) => (
                                                            <div
                                                                key={i}
                                                                className="acc__block"
                                                            >
                                                                <div className="acc__title">
                                                                    {col.title}
                                                                </div>
                                                                <ul className="acc__list">
                                                                    {col.items.map(
                                                                        (
                                                                            link,
                                                                            j
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    j
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        link.url
                                                                                    }
                                                                                    className="acc__link"
                                                                                    onClick={() =>
                                                                                        setOpenMenu(
                                                                                            false
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        link.name
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                    <Link
                                                        href={item.mega.cta.url}
                                                        className="btn btn--primary acc__cta"
                                                        onClick={() =>
                                                            setOpenMenu(false)
                                                        }
                                                    >
                                                        <FaBroom aria-hidden />{" "}
                                                        {item.mega.cta.label}
                                                    </Link>
                                                </div>
                                            ) : (
                                                <div className="acc__menu">
                                                    {item.dropdown.map(
                                                        (subItem, i) => (
                                                            <div
                                                                key={i}
                                                                className="acc__item"
                                                            >
                                                                {subItem.submenu ? (
                                                                    <details className="acc__details">
                                                                        <summary>
                                                                            {
                                                                                subItem.name
                                                                            }
                                                                        </summary>
                                                                        <div className="acc__submenu">
                                                                            {subItem.submenu.map(
                                                                                (
                                                                                    inner,
                                                                                    j
                                                                                ) => (
                                                                                    <Link
                                                                                        key={
                                                                                            j
                                                                                        }
                                                                                        href={
                                                                                            inner.url
                                                                                        }
                                                                                        className="acc__link"
                                                                                        onClick={() =>
                                                                                            setOpenMenu(
                                                                                                false
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            inner.name
                                                                                        }
                                                                                    </Link>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </details>
                                                                ) : (
                                                                    <Link
                                                                        href={
                                                                            subItem.url
                                                                        }
                                                                        className="acc__link"
                                                                        onClick={() =>
                                                                            setOpenMenu(
                                                                                false
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.url}
                                            className="acc__link"
                                            onClick={() => setOpenMenu(false)}
                                        >
                                            Öffnen
                                        </Link>
                                    )}
                                </div>
                            );
                        })}

                        <Link
                            href="/angebot"
                            className="btn btn--primary btn--block"
                        >
                            <FaPaperPlane aria-hidden /> Angebot anfordern
                        </Link>
                    </div>
                </aside>
            </div>
        </header>
    );
};

export default Header;
