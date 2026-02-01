"use client"

import { useState, useEffect, useCallback, useRef, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const slides = [
    {
        type: "intro",
        title: "2025",
        subtitle: "with Diplomacia",
        gradient: "from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]",
    },
    {
        type: "stats",
        title: "The Impact",
        stats: [
            { label: "Events Conducted", value: "10" },
            { label: "Active Members", value: "1000+" },
            { label: "Major Themes", value: "5" },
            { label: "Collaborators", value: "10+" },
        ],
        gradient: "from-accent/10 to-black",
    },
    {
        type: "theme",
        theme: "Diplomacy & International Relations",
        description: "From the high-energy exchanges of IIITN MUN 3.0 to the data-driven insights of Data x Diplomatics\n\nWe explored the evolving language of diplomacy, minority rights, and global responsibility.",
        highlights: [
            { text: "IIITN MUN 3.0", color: "#a3e635" },
            { text: "Data x Diplomatics", color: "#a3e635" }
        ],
        events: ["IIT MUN 3.0", "Data x Diplomatics", "Model United Nations"],
        posters: [
            "/assets/2025_eventposters/476431722_18034010570566645_5399390197666717525_n.webp",
            "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0003.webp",
            "/assets/2025_eventposters/iitm.kanhahouse-29-01-2026-0001.jpg"
        ],
        gradient: "from-blue-900/30 via-black to-black",
    },
    {
        type: "theme",
        theme: "Geopolitics & National Security",
        description: "We confronted real-world policy challenges by analyzing India’s Kashmir policy in Neeti Sabha and amplifying young voices through GenZ and Geopolitics.",
        highlights: [
            { text: "Neeti Sabha", color: "#c084fc" },
            { text: "GenZ and Geopolitics", color: "#c084fc" }
        ],
        events: ["Neeti Sabha", "Minds in Motion"],
        posters: [
            "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0001.jpg",
            "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0002.jpg"
        ],
        gradient: "from-red-900/30 via-black to-black",
    },
    {
        type: "theme",
        theme: "Society & Human Rights",
        description: "From questioning historical narratives in Feminism Without Colonialism to redefining youth leadership on National Youth Day, we made dialogue a tool for change.",
        highlights: [
            { text: "Feminism Without Colonialism", color: "#f87171" },
            { text: "National Youth Day", color: "#f87171" }
        ],
        events: ["Minds in Motion", "National Youth Day"],
        posters: [
            "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0001.webp",
            "/assets/2025_eventposters/nationalyouthdayposter.png"
        ],
        gradient: "from-emerald-900/30 via-black to-black",
    },
    {
        type: "theme",
        theme: "Governance & Innovation",
        description: "In the fierce parliamentary clashes of Echoes of Dispute and the visionary debates of Sunlight on Demand, policy met imagination.",
        highlights: [
            { text: "Echoes of Dispute", color: "#34d399" },
            { text: "Sunlight on Demand", color: "#34d399" }
        ],
        events: ["Minds in Motion: Sunlight on Demand", "Echoes of Dispute"],
        posters: [
            "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0002.webp",
            "/assets/2025_eventposters/thefearlessodyssey-29-01-2026-0001.jpg"
        ],
        gradient: "from-amber-900/30 via-black to-black",
    },
    {
        type: "theme",
        theme: "Culture & Patriotism",
        description: "Through poetry, music, and expression at गणतंत्र, एक शाम\n\nWe celebrated identity, unity, and the power of art in public discourse.",
        highlights: [
            { text: "गणतंत्र, एक शाम", color: "#60a5fa" }
        ],
        events: ["Republic Day Open Mic", "Gantantra Ek Shaam"],
        posters: [
            "/assets/2025_eventposters/bandipur_iitm-29-01-2026-0001.webp",
            // "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0003.webp"
        ],
        gradient: "from-indigo-900/30 via-black to-black",
    },
    {
        type: "outro",
        title: "2026 awaits.",
        subtitle: "The trial continues.",
        gradient: "from-black via-accent/5 to-black",
    }
];

function PosterDisplay({ posters, theme }: { posters: string[], theme: string }) {
    if (posters.length === 1) {
        return (
            <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] max-w-[200px] md:max-w-md shadow-2xl">
                    <Image
                        src={posters[0]}
                        alt={theme}
                        fill
                        className="object-cover rounded-sm border border-white/10"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                {posters.map((src, i) => {
                    const total = posters.length;
                    const offset = i - (total - 1) / 2;
                    const spacing = total > 2 ? 120 : 160;
                    return (
                        <div
                            key={i}
                            className="absolute transition-all duration-1000 ease-out"
                            style={{
                                width: 'min(35vw, 280px)',
                                height: 'min(45vw, 380px)',
                                left: '50%',
                                transform: `translateX(-50%) translateX(${offset * spacing}px) rotate(${offset * 10}deg) translateY(${Math.abs(offset) * 20}px)`,
                                zIndex: 10 + i,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`${theme} poster ${i + 1}`}
                                fill
                                className="object-cover rounded-sm border border-white/20 shadow-[-15px_15px_40px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function HighlightedText({ text, highlights }: { text: string, highlights: { text: string, color: string }[] }) {
    if (!highlights || highlights.length === 0) return <>{text}</>;

    let result: (string | ReactElement)[] = [text];

    highlights.forEach(highlight => {
        const newResult: (string | ReactElement)[] = [];
        result.forEach(part => {
            if (typeof part === 'string') {
                const parts = part.split(highlight.text);
                parts.forEach((p, i) => {
                    newResult.push(p);
                    if (i < parts.length - 1) {
                        newResult.push(<span key={highlight.text + i} style={{ color: highlight.color, fontWeight: 500 }}>{highlight.text}</span>);
                    }
                });
            } else {
                newResult.push(part);
            }
        });
        result = newResult;
    });

    return <>{result}</>;
}

function ScrollingCounter({ value, duration = 2000 }: { value: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const target = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [target, duration]);

    return (
        <span className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function SpotifyRecap() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Reset scroll position on slide change
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [currentSlide]);

    const nextSlide = useCallback(() => {
        setCurrentSlide(s => {
            setProgress(0);
            return s + 1;
        });
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide(s => {
            if (s > 0) {
                setProgress(0);
                return s - 1;
            }
            return s;
        });
    }, []);

    // Handle end of story (redirect)
    useEffect(() => {
        if (currentSlide >= slides.length) {
            router.push('/');
        }
    }, [currentSlide, router]);

    // Progress Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(p => {
                if (p < 100) return p + 0.4;
                return p;
            });
        }, 30);
        return () => clearInterval(timer);
    }, [currentSlide]);

    // Handle slide change when progress hits 100
    useEffect(() => {
        if (progress >= 100) {
            nextSlide();
        }
    }, [progress, nextSlide]);

    const slide = slides[currentSlide] || slides[slides.length - 1] || slides[0];

    return (
        <main className={`fixed inset-0 h-[100dvh] overflow-hidden bg-black text-white font-sans transition-colors duration-1000 bg-gradient-to-br ${slide.gradient}`}>


            {/* Story Progress Bars */}
            <div className="absolute top-4 md:top-6 left-4 right-4 z-[100] flex gap-1 md:gap-2">
                {slides.map((_, i) => (
                    <div key={i} className="h-[2px] flex-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-white transition-all duration-300 ${i < currentSlide ? 'w-full' : i === currentSlide ? '' : 'w-0'}`}
                            style={{ width: i === currentSlide ? `${progress}%` : undefined }}
                        />
                    </div>
                ))}
            </div>

            {/* Slide Content */}
            <div
                ref={scrollContainerRef}
                className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 relative pt-24 md:pt-32 overflow-y-auto no-scrollbar"
            >
                {/* Interaction Zones - Now at top to catch all clicks */}
                <div className="absolute inset-0 z-50 flex pointer-events-auto">
                    <div className="w-1/3 h-full cursor-w-resize" onClick={prevSlide} />
                    <div className="w-2/3 h-full cursor-e-resize" onClick={nextSlide} />
                </div>

                {/* Content Layers - Behind Interaction Zones but buttons on top */}
                <div className="max-w-6xl w-full z-40 animate-fade-in text-center relative pointer-events-none">
                    <div className="pointer-events-none">
                        {slide.type === "intro" && (
                            <div className="h-[240px] md:h-[280px] flex flex-col items-center justify-center space-y-4">
                                <h1 className="text-6xl md:text-8xl font-serif gold-text italic animate-fade-in mb-2 whitespace-nowrap inline-block px-4">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-4xl uppercase tracking-[0.4em] font-light opacity-50 italic">{slide.subtitle}</p>
                            </div>
                        )}

                        {slide.type === "stats" && (
                            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-12 md:space-y-24">
                                <h2 className="text-xs uppercase tracking-[0.5em] text-accent font-semibold opacity-60">Impact Report</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 text-center w-full max-w-7xl px-4">
                                    {slide.stats?.map((stat, i) => (
                                        <div key={i} className="space-y-4 md:space-y-6 group relative">
                                            {/* Decorative background element per stat */}
                                            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                            <p className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-medium">{stat.label}</p>
                                            <div className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-serif transition-transform duration-700 group-hover:scale-110 gold-text whitespace-nowrap inline-block px-1">
                                                <ScrollingCounter value={stat.value} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {slide.type === "theme" && (
                            <div className="flex flex-col gap-8 md:gap-12 items-center justify-center">
                                <div className="h-[240px] md:h-[280px] flex flex-col items-center justify-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
                                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent/80 font-semibold italic">Core Theme</p>
                                    <h2 className="text-4xl md:text-7xl font-serif leading-tight">{slide.theme}</h2>
                                    <p className="text-base md:text-xl font-light text-white/80 leading-relaxed italic whitespace-pre-line px-4">
                                        <HighlightedText text={slide.description || ""} highlights={(slide as any).highlights || []} />
                                    </p>
                                </div>
                                <div className="w-full">
                                    <PosterDisplay posters={slide.posters || []} theme={slide.theme || ""} />
                                </div>
                            </div>
                        )}

                        {slide.type === "outro" && (
                            <div className="h-[240px] md:h-[280px] flex flex-col items-center justify-center space-y-6 md:space-y-10">
                                <h2 className="text-6xl md:text-9xl font-serif gold-text italic">{slide.title}</h2>
                                <p className="text-lg md:text-3xl uppercase tracking-[0.5em] font-light opacity-40">{slide.subtitle}</p>
                                <div className="pt-4">
                                    <Link href="/" className="relative z-[60] pointer-events-auto inline-block px-10 py-3 md:px-12 md:py-4 border border-accent/40 text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-accent hover:text-black transition-all duration-700 bg-black/40 backdrop-blur-md">
                                        Return to Canvas
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .gold-text {
                    background: linear-gradient(to bottom, #f59e0b, #d97706);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
        </main>
    );
}
