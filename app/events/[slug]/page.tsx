"use client"

import { use, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { featuredEvents } from "@/data/events";

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [selectedCert, setSelectedCert] = useState<string | null>(null);
    const event = featuredEvents.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full bg-background text-foreground">
            <Navbar />

            {/* Certificate Lightbox Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/90 backdrop-blur-2xl p-4 md:p-12 animate-in fade-in duration-500"
                    onClick={() => setSelectedCert(null)}
                >
                    <button
                        className="absolute top-8 right-8 p-3 text-white/60 hover:text-accent transition-colors z-[110]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCert(null);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-[1.414/1] shadow-[0_0_100px_rgba(212,175,55,0.15)] animate-in zoom-in-95 duration-500">
                        <Image
                            src={selectedCert}
                            alt="Certificate View"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            <div className="pt-32 pb-16 px-8 md:px-16 max-w-7xl mx-auto">
                {/* Event Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Featured Event</p>
                    <h1 className="text-4xl md:text-6xl font-serif italic gold-text leading-tight">{event.title}</h1>
                    <p className="text-base md:text-lg font-light tracking-[0.3em] uppercase opacity-60 italic">{event.subtitle}</p>
                    <div className="h-[1px] w-24 bg-accent/30 mx-auto mt-6" />
                    <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed uppercase tracking-[0.15em] max-w-3xl mx-auto mt-6">
                        {event.description}
                    </p>
                </div>

                {/* Sessions Vertical Zig-Zag Layout */}
                <div className="space-y-16 md:space-y-24">
                    {[...event.sessions].reverse().map((session, index) => {
                        const actualIndex = event.sessions.length - 1 - index;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                            >
                                {/* Session Poster */}
                                <div className="w-full md:w-1/2 max-w-md">
                                    <div className="group relative">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-midnight border border-white/10">
                                            <Image
                                                src={session.poster}
                                                alt={session.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Decorative Border */}
                                        <div className="absolute -inset-3 border border-accent/20 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 -z-10" />
                                    </div>
                                </div>

                                {/* Session Info */}
                                <div className={`w-full md:w-1/2 space-y-4 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                                    <div className="space-y-2">
                                        <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-medium">
                                            Session {actualIndex + 1}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-accent leading-tight">
                                            {session.title}
                                        </h3>
                                        {session.date && (
                                            <p className="text-xs uppercase tracking-[0.3em] opacity-60">{session.date}</p>
                                        )}
                                    </div>

                                    <div className="h-[1px] w-16 bg-accent/30" />

                                    <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
                                        {session.description}
                                    </p>

                                    {session.certificates && session.certificates.length > 0 && (
                                        <div className="pt-6 space-y-4 relative group/gallery">
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-[1px] w-8 bg-accent/30" />
                                                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Recognition of Scholarly Merit</p>
                                                </div>

                                                {/* Scroll Buttons */}
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            const container = document.getElementById(`cert-scroll-${index}`);
                                                            if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
                                                        }}
                                                        className="p-1 border border-accent/20 hover:border-accent/40 text-accent/60 hover:text-accent transition-all"
                                                    >
                                                        <ChevronLeft className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            const container = document.getElementById(`cert-scroll-${index}`);
                                                            if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
                                                        }}
                                                        className="p-1 border border-accent/20 hover:border-accent/40 text-accent/60 hover:text-accent transition-all"
                                                    >
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                id={`cert-scroll-${index}`}
                                                className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x scroll-smooth"
                                            >
                                                {session.certificates.map((cert, certIdx) => (
                                                    <div
                                                        key={certIdx}
                                                        onClick={() => setSelectedCert(cert)}
                                                        className="relative w-48 aspect-[1.414/1] bg-midnight border border-white/10 shrink-0 snap-start group/cert cursor-zoom-in"
                                                    >
                                                        <Image
                                                            src={cert}
                                                            alt={`Certificate ${certIdx + 1}`}
                                                            fill
                                                            className="object-cover opacity-80 group-hover/cert:opacity-100 transition-opacity"
                                                        />
                                                        <div className="absolute inset-0 border border-accent/0 group-hover/cert:border-accent/20 transition-colors pointer-events-none" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-4 pt-2">
                                        {session.videoUrl && (
                                            <a
                                                href={session.videoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group/link"
                                            >
                                                <span className="text-sm font-serif italic tracking-wider">Watch the event</span>
                                                <svg
                                                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        )}

                                        {session.problemStatementUrl && (
                                            <a
                                                href={session.problemStatementUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group/link"
                                            >
                                                <span className="text-sm font-serif italic tracking-wider">Problem Statement</span>
                                                <svg
                                                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
                .gold-text {
                    background: linear-gradient(to bottom, #D4AF37, #C5A028);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
