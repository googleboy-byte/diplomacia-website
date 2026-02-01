"use client"

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleSystem from "@/components/ParticleSystem";

interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "What is Diplomacia?",
            answer: "Diplomacia is a student led official society of IITM BS Program for diplomacy, IR, Geopolitics, Soft skills, and events related to them."
        },
        {
            question: "Who can participate in Diplomacia events?",
            answer: "Most of our events are open to all students of the IITM BS Program. Some specialized workshops or competitions might have specific eligibility criteria, which will always be mentioned in the event announcement."
        },
        {
            question: "How to join?",
            answer: (
                <a
                    href="YOUR_GFORM_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                >
                    Click here to fill the membership form
                </a>
            )
        },
        {
            question: "How to join as a Diplomacia delegate?",
            answer: (
                <a
                    href="YOUR_DELEGATE_GFORM_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                >
                    Click here to apply as a delegate
                </a>
            )
        },
        {
            question: "How to become a core member?",
            answer: "Core positions are rolled out as per requirements, please keep an eye on your student mail and our website."
        },
        {
            question: "How often does the society meet?",
            answer: "We conduct regular sessions and meetings, typically ranging from bi-weekly discussions to monthly flagship events. Specific schedules are shared via our official communication channels."
        },
        {
            question: "What kind of soft skills can I expect to develop?",
            answer: "Participants develop crucial skills including public speaking, negotiation, critical thinking, research, and diplomatic writing. You'll also learn to navigate complex geopolitical narratives and policy frameworks."
        },
        {
            question: "Can my society/club collaborate with Diplomacia?",
            answer: "Yes! We are always open to strategic alliances. Please reach out to us via our official email with your proposal, and our core team will get in touch."
        },
        {
            question: "What are the perks?",
            answer: "Get opportunity to enhance your interpersonal skills while understanding geopolitics, IR and many other things. Many events also have participation/merit certificates and/or prize money."
        }
    ];

    return (
        <main className="min-h-screen bg-black text-foreground relative overflow-hidden">
            <Navbar />

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" />
            </div>

            <ParticleSystem />

            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />

            <div className="relative z-10 pt-32 pb-16 px-8 md:px-16 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Frequently Asked</p>
                    <h1 className="text-4xl md:text-6xl font-serif italic gold-text leading-tight">Questions</h1>
                    <div className="h-[1px] w-24 bg-accent/30 mx-auto mt-6" />
                    <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed max-w-2xl mx-auto mt-6">
                        Everything you need to know about joining and participating in Diplomacia
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 animate-fade-in-up delay-200">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 bg-black/40 backdrop-blur-md hover:border-accent/40 transition-all duration-300 group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
                            >
                                <h3 className="text-lg md:text-xl font-serif text-foreground/90 group-hover:text-accent transition-colors pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`shrink-0 w-6 h-6 relative transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/50 group-hover:bg-accent transition-colors" />
                                    <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-accent/50 group-hover:bg-accent transition-colors duration-300 ${openIndex === index ? 'opacity-0' : 'opacity-100'}`} />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                    <div className="h-[1px] w-full bg-accent/10 mb-6" />
                                    <div className="text-sm md:text-base font-light text-foreground/70 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center p-8 border border-accent/20 bg-black/40 backdrop-blur-md animate-fade-in-up delay-300">
                    <p className="text-sm font-light text-foreground/60 mb-4">
                        Still have questions?
                    </p>
                    <a href="mailto:diplomacia@study.iitm.ac.in" className="text-accent text-xs uppercase tracking-[0.3em] hover:text-white transition-colors">
                        Reach out to us via student mail
                    </a>
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
            `}</style>
        </main>
    );
}
