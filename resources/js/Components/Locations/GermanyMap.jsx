// GermanyMap.jsx
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";
import { router } from "@inertiajs/react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function GermanyMap({ locations, activeId, setActiveId }) {
    return (
        <div className="germany-map-svg">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    center: [10.45, 51.165], // Almanya merkezi
                    scale: 3500, // ==> BÜYÜK görünüm (2800–3800 arası oynatabilirsin)
                }}
                width={800} // yüksek çözünürlükte path üretir
                height={1000}
                style={{ width: "100%", height: "auto" }} // responsive
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies
                            .filter((g) => g.properties.name === "Germany")
                            .map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#E5E7EB"
                                    stroke="#C9CED6"
                                    strokeWidth={1}
                                />
                            ))
                    }
                </Geographies>

                {locations.map((loc) => {
                    const isActive = activeId === loc.id;
                    return (
                        <Marker
                            key={loc.id}
                            coordinates={[
                                loc.coordinates.lng,
                                loc.coordinates.lat,
                            ]}
                            onMouseEnter={() => setActiveId?.(loc.id)}
                            onMouseLeave={() => setActiveId?.(null)}
                            onClick={() => router.visit(loc.link)}
                            tabIndex={0}
                            onKeyDown={(e) =>
                                e.key === "Enter" && router.visit(loc.link)
                            }
                        >
                            {/* pin */}
                            <g
                                transform="translate(-6,-18)"
                                aria-label={loc.title}
                            >
                                <circle
                                    r={10}
                                    fill={isActive ? "#065F46" : "#10B981"}
                                    opacity={isActive ? 1 : 0.85}
                                />
                                <path
                                    d="M6 0 L12 18 L0 18 Z"
                                    fill={isActive ? "#065F46" : "#10B981"}
                                />
                            </g>

                            {/* label: sadece aktifken göster => üst üste binmez */}
                            {isActive && (
                                <text
                                    y={-24}
                                    textAnchor="middle"
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 600,
                                        pointerEvents: "none",
                                    }}
                                >
                                    {loc.city}
                                </text>
                            )}
                        </Marker>
                    );
                })}
            </ComposableMap>
        </div>
    );
}
