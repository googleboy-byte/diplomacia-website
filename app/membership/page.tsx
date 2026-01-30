import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function MembershipPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <div className="space-y-4 animate-fade-in-up">
                        <h2 className="text-lg md:text-xl uppercase tracking-[0.5em] text-accent font-light px-4">Join the Society</h2>
                    </div>

                    <p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 italic border-l-2 border-accent/20 pl-6 md:pl-12 py-4 animate-fade-in-up delay-300 text-left md:text-center mx-auto max-w-3xl px-4">
                        "Diplomacia is a platform dedicated to fostering leadership, critical thinking, and global awareness among students and young professionals."
                    </p>

                    <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <p className="text-sm md:text-lg font-light leading-loose text-foreground/60 max-w-2xl mx-auto uppercase tracking-[0.2em] md:tracking-widest px-4 md:px-0">
                            By becoming a member, you will gain access to exclusive events, discussions and opportunities to engage in meaningful dialogue on national and international relations, policy, and global affairs.
                        </p>

                        <div className="flex flex-col items-center gap-8 pt-8">
                            <div className="h-[1px] w-24 bg-accent/30" />
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfqMPSXA2tEv3SdxEqTY-28Gz4IDu3J-FMeU00byfEDmBL-OQ/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-12 py-5 bg-transparent border border-accent/30 hover:border-accent transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative text-xs uppercase tracking-[0.4em] font-light group-hover:text-accent transition-colors">
                                    Apply for Membership
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full opacity-50" />
                <span className="text-[20rem] font-serif italic opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    D
                </span>
            </section>

            {/* Footer (Replicated from main page for consistency) */}
            <footer className="py-24 border-t border-white/5 bg-midnight/10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
                    <Link href="/" className="mb-12 group inline-block">
                        <h2 className="text-4xl font-serif gold-text transition-transform duration-700 group-hover:scale-105">Diplomacia</h2>
                        <p className="text-[10px] uppercase tracking-[0.8em] opacity-40 mt-4">The World on Trial</p>
                    </Link>

                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] uppercase tracking-[0.4em] opacity-30 mb-16">
                        <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                        <a href="#" className="hover:text-accent transition-colors">Twitter</a>
                    </div>

                    <p className="text-[8px] uppercase tracking-widest opacity-20 font-light italic">
                        &copy; MMXXIV Diplomacia Society • All Sovereign Rights Reserved
                    </p>
                </div>
            </footer>
        </main>
    );
}
