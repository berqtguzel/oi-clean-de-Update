// resources/js/Layouts/AppLayout.jsx
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import OfferDock from "../Components/OfferDock";

export default function AppLayout({ content, children, currentRoute }) {
    return (
        <div className="min-h-screen flex flex-col antialiased relative">
            <Header content={content} currentRoute={currentRoute} />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer content={content} />
            <OfferDock />
        </div>
    );
}
