import React from "react";
import HeroSection from "@/Components/Home/HeroSection";
import ServiceCategories from "@/Components/Home/ServiceCategories";
import AppLayout from "@/Layouts/AppLayout";
import ServicesGrid from "@/Components/Services/ServicesGrid";
import LocationsGrid from "@/Components/Locations/LocationsGrid";
import ContactSection from "@/Components/Contact/ContactSection";

export default function Home({
    content,
    services = [],
    locations = [],
    settings = {},
    currentRoute,
}) {
    return (
        <AppLayout
            content={content}
            currentRoute={currentRoute}
            settings={settings}
        >
            <HeroSection content={content} />
            <ServiceCategories content={content} />
            <ServicesGrid services={services} />
            <LocationsGrid locations={locations} />
            <ContactSection settings={settings} />
        </AppLayout>
    );
}
