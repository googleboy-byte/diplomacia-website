"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Featured Events", href: "/#featured-events" },
        { name: "2025", href: "/2025" },
        { name: "Membership", href: "/membership" },
        { name: "Team", href: "/#team" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen ? "bg-background/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"}`}>
                <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between relative">
                    <Link href="/" className="flex items-center gap-6 group" onClick={() => setIsOpen(false)}>
                        <div className="absolute -top-6 -left-1 md:-left-8 w-32 md:w-40 transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/assets/diplomacialogo.png"
                                alt="Diplomacia Logo"
                                width={160}
                                height={160}
                                className="opacity-90 contrast-125 w-full h-auto"
                                priority
                            />
                        </div>
                        <span className="text-2xl font-serif tracking-widest gold-text uppercase hidden sm:block ml-32 md:ml-40">
                            Diplomacia
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-light">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-accent transition-colors duration-300">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-foreground relative z-50 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="flex flex-col gap-1.5 w-6">
                            <div className={`h-[1px] w-full bg-accent transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <div className={`h-[1px] w-full bg-accent transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <div className={`h-[1px] w-full bg-accent transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-700 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-12 px-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-serif italic tracking-widest transition-all duration-500 hover:text-accent ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="w-12 h-[1px] bg-accent/30 mt-8" />
                    <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 mt-4">The World on Trial</p>
                </div>
            </div>
        </>
    );
}

