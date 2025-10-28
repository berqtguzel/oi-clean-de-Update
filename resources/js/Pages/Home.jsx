import HeroSection from "@/Components/Home/HeroSection";
import ServiceCategories from "@/Components/Home/ServiceCategories";
import AppLayout from "@/Layouts/AppLayout";

export default function Home({ content, currentRoute }) {
    return (
        <AppLayout content={content} currentRoute={currentRoute}>
            <HeroSection content={content} />
            <ServiceCategories content={content} />
            <div className="py-16 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    O&I CLEAN: Temizlikte Lider
                </h2>
                <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
                    birleştiriyoruz.
                </p>
            </div>
        </AppLayout>
    );
}
