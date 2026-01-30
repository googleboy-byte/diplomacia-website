"use client"

import Image from "next/image";
import ParticleSystem from "./ParticleSystem";
import { useState, useEffect } from "react";

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // mouse parallax effect. unnecessary for now

    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         setMousePos({
    //             x: (e.clientX / window.innerWidth - 0.5) * 20,
    //             y: (e.clientY / window.innerHeight - 0.5) * 20,
    //         });
    //     };
    //     window.addEventListener("mousemove", handleMouseMove);
    //     return () => window.removeEventListener("mousemove", handleMouseMove);
    // }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
                style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.1)` }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Luxury Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
            </div>

            {/* Subtle Particles */}
            <ParticleSystem />

            {/* Content */}
            <div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-transform duration-500 ease-out"
                style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
            >
                {/* <div className="flex flex-col items-center mb-12 animate-fade-in-up">
                    <Image
                        src="/assets/diplomacialogo.png"
                        alt="Diplomacia Emblem"
                        width={100}
                        height={100}
                        className="mb-8 opacity-90 contrast-125"
                    />

                </div> */}


                <div className="overflow-hidden mb-6">
                    <p className="text-accent uppercase tracking-[0.5em] text-xs md:text-sm animate-fade-in-up">
                        Presenting
                    </p>
                </div>

                {/* a centered vertical golden line here please */}
                <div className="w-[1px] h-12 bg-accent/30 mx-auto" />

                <h1 className="text-6xl md:text-9xl mb-8 leading-tight font-serif italic animate-fade-in-up">
                    Diplomacia
                </h1>

                <div className="w-24 h-[1px] bg-accent/50 mx-auto mb-12" />

                <p className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase opacity-80 animate-fade-in-up delay-300">
                    The World on Trial
                </p>

                {/* add another button here and make them side by side
                the next button should say about us */}

                {/* make sure the buttons are side by side and centered */}

                {/* make the buttons have a little lesser width please */}
                <div className="flex justify-center items-center gap-4 mx-auto">
                    <div className="mt-20">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfqMPSXA2tEv3SdxEqTY-28Gz4IDu3J-FMeU00byfEDmBL-OQ/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-accent/30 hover:bg-accent hover:border-accent transition-all duration-500 flex items-center gap-4 mx-auto group"
                        >
                            <span className="text-xs uppercase tracking-[0.3em] text-accent group-hover:text-black group-hover:font-bold transition-all duration-500">Join Us</span>
                            <div className="w-8 h-[1px] bg-accent group-hover:bg-black group-hover:w-12 transition-all duration-500" />
                        </a>
                    </div>

                    <div className="mt-20">
                        <button className="px-8 py-4 border border-accent/30 hover:bg-accent hover:border-accent transition-all duration-500 flex items-center gap-4 mx-auto group">
                            <span className="text-xs uppercase tracking-[0.3em] text-accent group-hover:text-black group-hover:font-bold transition-all duration-500">About Us</span>
                            <div className="w-8 h-[1px] bg-accent group-hover:bg-black group-hover:w-12 transition-all duration-500" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
                <div className="w-[1px] h-16 bg-gradient-to-b from-accent/0 to-accent animate-pulse" />
            </div>
        </section>
    );
}
