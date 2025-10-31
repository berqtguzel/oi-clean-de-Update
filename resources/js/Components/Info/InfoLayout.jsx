// resources/js/Components/Info/InfoLayout.jsx
import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function InfoLayout({ children, title, nav }) {
    const { url } = usePage(); // aktif slug karşılaştırması için

    return (
        <section className="relative">
            <div className="container mx-auto max-w-6xl px-4 py-10">
                {/* Hero */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        {title}
                    </h1>
                    <div className="mt-2 h-px w-full bg-gray-200 dark:bg-neutral-800" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Sidebar nav */}
                    <aside className="md:col-span-4 lg:col-span-3">
                        <nav className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-2">
                            {nav.map((item) => {
                                const href = route("info.show", item.slug);
                                const active = url === `/${item.slug}`;
                                return (
                                    <Link
                                        key={item.slug}
                                        href={href}
                                        className={
                                            "block rounded-xl px-3 py-2 font-medium transition " +
                                            (active
                                                ? "bg-blue-600 text-white"
                                                : "text-neutral-800 dark:text-neutral-200 hover:bg-blue-50 dark:hover:bg-white/5")
                                        }
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </aside>

                    {/* Content */}
                    <main className="md:col-span-8 lg:col-span-9">
                        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 shadow">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
