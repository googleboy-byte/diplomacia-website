"use client"

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ParticleSystem from "@/components/ParticleSystem";

const events = [
    {
        title: "Paradox in Margazhi - Model United Nations",
        date: "January 4-6, 2025",
        description: "Diplomacy in Action: Protecting Minority Rights. A signature Model United Nations conference held in collaboration with Kanha House, WYZ Kids, and Sahityika.",
        stats: "200+ Registrations • Online Technical Coordination",
        poster: "/assets/2025_eventposters/iitm.kanhahouse-29-01-2026-0001.jpg",
    },
    {
        title: "Echoes of Dispute",
        date: "January 24-25, 2025",
        description: "Parliamentary-style debate competition in collaboration with Namdapha House and Fearless Orators Club. Featured a prize pool of ₹4,000.",
        stats: "100+ Registrations • 70+ Active Participants",
        poster: "/assets/2025_eventposters/thefearlessodyssey-29-01-2026-0001.jpg",
    },
    {
        title: "Gantantra Ek Shaam - Republic Day Open Mic",
        date: "January 26, 2025",
        description: "A cultural open mic celebrating Republic Day. Collaborative effort with Bandipur & Gir House, Sahityika, Akord, and Samvaah Club.",
        stats: "100+ Registrations • 40+ Performance Participants",
        poster: "/assets/2025_eventposters/bandipur_iitm-29-01-2026-0001.webp",
    },
    {
        title: "Global Series - Minds in Motion",
        date: "October – November 2025",
        description: "Three-part series: GenZ & Geopolitics, Sunlight on Demand, and Feminism Without Colonialism. Collaborative geopolitical discourse.",
        stats: "115+ Average Attendees • Project DemoLeague Partnership",
        poster: "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0002.webp",
    },
    {
        title: "Data x Diplomatics",
        date: "July 19-26, 2025",
        description: "Virtual session with Ayush Shukla on how quantitative indicators and data analytics shape policy narratives and national image.",
        stats: "100+ Attendees • Where Policy Meets Probability",
        poster: "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0003.webp",
    },
    {
        title: "Special Session on National Youth Day",
        date: "January 12, 2025",
        description: "Featured Swami Atmashraddhanandaji Maharaj (Ramakrishna Mission Ashrama). Interactive debate on youth's role in achieving SDGs, in collaboration with Sahara Society.",
        stats: "60+ Audience • Enlightening Speaker Session",
        poster: "/assets/2025_eventposters/nationalyouthdayposter.png",
    }
];

export default function Events2025() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
            <Navbar />

            {/* Background Particles */}
            <div className="fixed inset-0 pointer-events-none">
                <ParticleSystem />
            </div>

            <section className="relative pt-44 pb-20 px-8 md:px-16 container mx-auto">
                <div className="max-w-4xl mb-24 animate-fade-in-up">
                    <h1 className="text-5xl md:text-8xl font-serif italic mb-8 gold-text">2025</h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase opacity-60">
                        A Year of Sovereign Discourse
                    </p>
                    <div className="w-24 h-[1px] bg-accent/50 mt-12" />
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-12 group animate-fade-in-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-midnight/20 border border-white/5 transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                                <Image
                                    src={event.poster}
                                    alt={event.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Visual Overlay on Hover */}
                                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center p-12">
                                    <p className="text-center font-serif italic text-lg leading-relaxed text-foreground">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-accent uppercase tracking-[0.3em] text-xs font-light">
                                    {event.date}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-serif">{event.title}</h3>
                                <div className="h-[1px] w-12 bg-accent/30 group-hover:w-24 transition-all duration-700" />
                                <p className="text-sm font-light uppercase tracking-widest opacity-50">
                                    {event.stats}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Branding */}
            <footer className="py-32 border-t border-white/5 text-center">
                <Link href="/" className="inline-block group">
                    <h2 className="text-4xl font-serif gold-text mb-4 transition-transform group-hover:scale-105">Diplomacia</h2>
                    <p className="text-xs uppercase tracking-[0.5em] opacity-30 group-hover:opacity-60 transition-opacity">Return to Canvas</p>
                </Link>
            </footer>
        </main>
    );
}
