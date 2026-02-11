"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleSystem from "@/components/ParticleSystem";
import { team } from "@/data/team";

export default function TeamPage() {
    const [activeRole, setActiveRole] = useState<string>("Founder");
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const roles = ["Founder", "Secretary", "Documentation", "Event Research", "Creative Content"];

    const roleMembers = team.filter(member => {
        if (activeRole === "Founder") return member.role === "Founder";
        if (activeRole === "Secretary") return member.role.includes("Secretary");
        return member.role.includes(activeRole);
    });

    // Track scroll position for indicators
    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft;
                const cardWidth = 280; // Card width + gap on mobile
                const index = Math.round(scrollLeft / cardWidth);
                setCurrentIndex(index);
            }
        };

        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Reset index when role changes
    useEffect(() => {
        setCurrentIndex(0);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeRole]);

    return (
        <main className="min-h-screen bg-black text-foreground relative overflow-hidden">
            <Navbar />

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95" />
            </div>

            <ParticleSystem />

            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full opacity-30 pointer-events-none" />

            <div className="relative z-10 pt-32 pb-16 px-8 md:px-16">
                {/* Header with Role Tabs */}
                <div className="text-center mb-12 space-y-6 animate-fade-in-up max-w-7xl mx-auto">
                    <div>
                        {/* <p className="text-accent uppercase tracking-[0.5em] text-[10px] mb-2">Meet The</p>
                        <h1 className="text-4xl md:text-5xl font-serif italic gold-text leading-tight">Team</h1> */}
                    </div>

                    {/* Role Tabs */}
                    <div className="flex flex-wrap gap-4 md:gap-8 justify-center border-b border-white/10 pb-4">
                        {roles.map((role) => (
                            <button
                                key={role}
                                onClick={() => setActiveRole(role)}
                                className={`pb-2 text-[10px] md:text-sm uppercase tracking-[0.3em] transition-colors relative ${activeRole === role ? "text-accent" : "text-white/40 hover:text-white/60"
                                    }`}
                            >
                                {role === "Founder" ? "Founders" : role}
                                {activeRole === role && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Horizontal Carousel */}
                <div className="max-w-7xl mx-auto">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-thin px-4 md:px-0"
                    >
                        <div className="flex gap-4 md:gap-8 mx-auto h-full">
                            {roleMembers.map((member, index) => (
                                <div
                                    key={member.name}
                                    className="flex-shrink-0 w-[260px] md:w-[320px] snap-center animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="bg-black/60 backdrop-blur-md border border-white/10 hover:border-accent/50 overflow-hidden transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20">
                                        {/* Image */}
                                        <div className="relative aspect-[3/4] overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                            {/* Name Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <h2 className="text-2xl font-serif text-white mb-2">
                                                    {member.name}
                                                </h2>
                                                <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="p-4 bg-black/80">
                                            <div className="flex gap-3 justify-center">
                                                {member.socials.linkedin && (
                                                    <a
                                                        href={member.socials.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 border border-white/20 hover:border-accent/50 hover:bg-accent/10 flex items-center justify-center transition-all"
                                                    >
                                                        <svg className="w-5 h-5 text-white/60 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {member.socials.instagram && (
                                                    <a
                                                        href={member.socials.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 border border-white/20 hover:border-accent/50 hover:bg-accent/10 flex items-center justify-center transition-all"
                                                    >
                                                        <svg className="w-5 h-5 text-white/60 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {member.socials.github && (
                                                    <a
                                                        href={member.socials.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 border border-white/20 hover:border-accent/50 hover:bg-accent/10 flex items-center justify-center transition-all"
                                                    >
                                                        <svg className="w-5 h-5 text-white/60 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {member.socials.email && (
                                                    <a
                                                        href={`mailto:${member.socials.email}`}
                                                        className="w-10 h-10 border border-white/20 hover:border-accent/50 hover:bg-accent/10 flex items-center justify-center transition-all"
                                                    >
                                                        <svg className="w-5 h-5 text-white/60 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Indicators (Mobile) */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {roleMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (carouselRef.current) {
                                        const cardWidth = 276; // 260px + 16px gap
                                        carouselRef.current.scrollTo({
                                            left: index * cardWidth,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? 'w-8 bg-accent'
                                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                .gold-text {
                    background: linear-gradient(to bottom, #D4AF37, #C5A028);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .scrollbar-thin::-webkit-scrollbar {
                    height: 8px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: rgba(212, 175, 55, 0.3);
                    border-radius: 4px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: rgba(212, 175, 55, 0.5);
                }
            `}</style>
        </main>
    );
}
