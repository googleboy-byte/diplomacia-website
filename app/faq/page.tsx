"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQItem {
    question: string;
    answer: string | JSX.Element;
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "What is Diplomacia?",
            answer: "Diplomacia is a student led official society of IITM BS Program for diplomacy, IR, Geopolitics, Soft skills, and events related to them."
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
            question: "What are the perks?",
            answer: "Get opportunity to enhance your interpersonal skills while understanding geopolitics, IR and many other things. Many events also have participation/merit certificates and/or prize money."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-16 px-8 md:px-16 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Frequently Asked</p>
                    <h1 className="text-4xl md:text-6xl font-serif italic gold-text leading-tight">Questions</h1>
                    <div className="h-[1px] w-24 bg-accent/30 mx-auto mt-6" />
                    <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed max-w-2xl mx-auto mt-6">
                        Everything you need to know about joining and participating in Diplomacia
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 bg-midnight/50 backdrop-blur-sm hover:border-accent/40 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                            >
                                <h3 className="text-lg md:text-xl font-serif text-foreground/90 group-hover:text-accent transition-colors pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`shrink-0 w-6 h-6 relative transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent" />
                                    <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-accent transition-opacity duration-300 ${openIndex === index ? 'opacity-0' : 'opacity-100'}`} />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                    <div className="h-[1px] w-full bg-accent/20 mb-6" />
                                    <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center p-8 border border-accent/20 bg-midnight/30 backdrop-blur-sm">
                    <p className="text-sm font-light text-foreground/60 mb-4">
                        Still have questions?
                    </p>
                    <p className="text-accent text-xs uppercase tracking-[0.3em]">
                        Reach out to us via student mail
                    </p>
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
