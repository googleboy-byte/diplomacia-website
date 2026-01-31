"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { featuredEvents } from "@/data/events";

export default function EventsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % featuredEvents.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);

    const event = featuredEvents[currentIndex];

    return (
        <main className="min-h-screen w-full bg-background text-foreground overflow-hidden relative font-sans pt-24">
            <Navbar />

            {/* Background Image Parallax/Fade */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover opacity-20 blur-3xl transition-all duration-1000 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="relative z-10 min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-8 md:px-16 py-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl w-full">

                    {/* Poster Section - Optimized size to fit viewport */}
                    <div className="w-full max-w-[200px] md:max-w-[280px] aspect-[4/5] relative group animate-fade-in shadow-2xl shrink-0">
                        <div className="relative h-full w-full border border-white/10 overflow-hidden bg-midnight">
                            <Image
                                src={event.thumbnail}
                                alt={event.title}
                                fill
                                className="object-fill transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4 md:space-y-5 text-center md:text-left animate-fade-in-up">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[9px] md:text-[10px]">Featured Event</p>
                            <h1 className="text-3xl md:text-5xl font-serif italic gold-text leading-tight">{event.title}</h1>
                            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase opacity-60 italic">{event.subtitle}</p>
                        </div>

                        <div className="h-[1px] w-12 md:w-16 bg-accent/30 mx-auto md:ml-0" />

                        <p className="text-xs md:text-sm font-light text-foreground/70 leading-relaxed uppercase tracking-[0.15em] max-w-lg">
                            {event.description}
                        </p>

                        <div className="pt-3 md:pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16 md:mb-0">
                            <Link
                                href={`/events/${event.slug}`}
                                className="relative z-50 inline-block px-8 py-2.5 md:py-3 border border-accent/40 text-[9px] md:text-[10px] uppercase tracking-[0.4em] hover:bg-accent hover:text-black transition-all duration-700 bg-black/40 backdrop-blur-md group"
                            >
                                <span className="flex items-center gap-3">
                                    Explore Sessions
                                    <div className="w-6 h-[1px] bg-accent group-hover:bg-black group-hover:w-10 transition-all duration-700" />
                                </span>
                            </Link>

                            <a
                                href="https://chat.whatsapp.com/D9pthdzI6h0KvwHIcyZEJ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-50 inline-block px-8 py-2.5 md:py-3 border border-accent text-[9px] md:text-[10px] uppercase tracking-[0.4em] bg-accent text-black hover:bg-accent/80 transition-all duration-700 backdrop-blur-md group"
                            >
                                <span className="flex items-center gap-3">
                                    Join Event
                                    <div className="w-6 h-[1px] bg-black group-hover:w-10 transition-all duration-700" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Navigation Buttons */}
            {featuredEvents.length > 1 && (
                <div className="absolute top-1/2 -translate-y-1/2 inset-x-8 md:inset-x-12 flex justify-between pointer-events-none">
                    <button
                        onClick={prev}
                        className="pointer-events-auto p-4 md:p-6 border border-white/5 bg-background/20 backdrop-blur-sm hover:border-accent/40 transition-all group"
                        aria-label="Previous Event"
                    >
                        <div className="w-6 md:w-10 h-[1px] bg-white/50 group-hover:bg-accent transition-all group-hover:w-14" />
                    </button>
                    <button
                        onClick={next}
                        className="pointer-events-auto p-4 md:p-6 border border-white/5 bg-background/20 backdrop-blur-sm hover:border-accent/40 transition-all group"
                        aria-label="Next Event"
                    >
                        <div className="w-6 md:w-10 h-[1px] bg-white/50 group-hover:bg-accent transition-all group-hover:w-14" />
                    </button>
                </div>
            )}

            {/* Slider Progress Indicators */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-4 md:gap-6">
                {featuredEvents.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-[2px] transition-all duration-700 ${i === currentIndex ? 'w-12 md:w-20 bg-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'w-4 md:w-6 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                .gold-text {
                    background: linear-gradient(to bottom, #D4AF37, #C5A028);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </main>
    );
}
