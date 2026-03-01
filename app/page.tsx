"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Users, Send, BookOpen } from "lucide-react";

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState<{ file: string; name: string } | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="our-vision" className="py-32 px-8 md:px-16 lux-gradient overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.5em] text-accent font-light">The Manifesto</h2>
              <h3 className="text-4xl md:text-7xl font-serif italic gold-text">The World on Trial</h3>
            </div>

            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 max-w-xl italic border-l-2 border-accent/20 pl-8">
              "In the theater of global affairs, diplomacy is the bridge between policy and probability. We don't just debate; we architect the future through sovereign discourse."
            </p>

            <div className="space-y-6">
              <p className="text-sm font-light leading-loose text-foreground/60 max-w-lg">
                Founded with a vision to redefine diplomatic engagement, Diplomacia serves as an elite forum for Model United Nations, Parliamentary Debates, and high-level policy deliberations.
              </p>
              <div className="h-[1px] w-24 bg-accent/30" />
            </div>
          </div>

          <div className="flex-1 relative aspect-[4/5] w-full max-w-md group">
            <div className="absolute inset-0 border border-accent/10 translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 z-10" />
            <div className="absolute inset-0 bg-midnight/40 backdrop-blur-sm border border-white/5 flex flex-col items-center justify-center p-12 text-center overflow-hidden z-20">
              {/* Collaborator Logos - grouped tightly inside the card */}

              {[
                { file: "akord_iitm-29-01-2026-0001.jpg", name: "AKORD Music Society" },
                { file: "girhouse_iitm-29-01-2026-0001.jpg", name: "Gir House" },
                { file: "housepichavaram-29-01-2026-0001.jpg", name: "Pichavaram House" },
                { file: "iitm.kanhahouse-29-01-2026-0002.jpg", name: "Kanha House" },
                { file: "namdapha_iitm-29-01-2026-0001.jpg", name: "Namdapha House" },
                { file: "orator_iiitn-29-01-2026-0001.jpg", name: "Veritas Oratory Society" },
                { file: "sahara_iitmbs-29-01-2026-0001.jpg", name: "SAHARA - Social Welfare" },
                { file: "sahityika_iitm-29-01-2026-0001.jpg", name: "Sahityika: Literary Society" },
                { file: "samvaah_official-29-01-2026-0001.jpg", name: "Samvaah" },
                { file: "thefearlessodyssey-29-01-2026-0001.jpg", name: "The Fearless Odyssey" },
                { file: "wyzkids.iitmbs-29-01-2026-0001.jpg", name: "WYZ Kids: Quiz Club" }
              ].map((item, i) => (
                <div
                  key={item.file}
                  className="absolute animate-fade-in-up transition-transform duration-1000 group/logo cursor-pointer z-20"
                  style={{
                    top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 11)}%`,
                    left: `${45 + 40 * Math.cos((i * 2 * Math.PI) / 11)}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 100}ms`
                  }}
                  onClick={() => setSelectedLogo(item)}
                >
                  <div className="relative group/tooltip">
                    <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20 bg-midnight/50 backdrop-blur-sm opacity-80 group-hover/logo:opacity-100 transition-all duration-700 shadow-lg group-hover/logo:scale-110">
                      <Image
                        src={`/assets/collaborators/${item.file}`}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-background/95 border border-white/10 backdrop-blur-md rounded-full opacity-0 group-hover/logo:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
                      <p className="text-[8px] uppercase tracking-widest text-accent font-light">{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none z-0" />
              <span className="text-[12rem] font-serif italic opacity-5 select-none absolute -bottom-10 -right-10 pointer-events-none z-0">D</span>
              <p className="text-xs uppercase tracking-[0.6em] font-light mb-8 opacity-40 relative z-10">Est. 2023</p>
              <h4 className="text-2xl font-serif mb-4 relative z-10">Collaborators</h4>
              {/* <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 mb-8 max-w-[200px] leading-relaxed">
                Strategic alliances with premier academic and diplomatic institutions.
              </p> */}
              <p className="text-[10px] uppercase tracking-[0.3em] font-light text-accent italic relative z-10">Alliances with fellow societies</p>
            </div>
          </div>
        </div>
      </section>


      {/* Strategic Portals Section */}
      <section className="py-24 px-8 md:px-16 bg-midnight/10 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold italic">Diplomatic Access</h2>
              <h3 className="text-3xl md:text-5xl font-serif italic gold-text leading-tight">Strategic Portals</h3>
            </div>
            <p className="text-xs md:text-sm font-light leading-loose text-foreground/40 max-w-md uppercase tracking-[0.15em]">
              Direct interfaces for active participation in the society's scholarly and organizational initiatives.
            </p>
          </div>

          <div className="flex-[3] grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Link href="/membership" className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 transition-all duration-700 relative overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110">
                <Users className="w-12 h-12 text-accent" />
              </div>
              <div className="relative z-10 space-y-4">
                <p className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold italic">Enrollment Portal</p>
                <h4 className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-500">Join the Society</h4>
                <div className="w-8 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-700" />
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Apply for membership and gain access to the inner corridors of diplomatic discourse.
                </p>
              </div>
            </Link>

            <Link href="/events/minds-in-motion" className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 transition-all duration-700 relative overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110">
                <BookOpen className="w-12 h-12 text-accent" />
              </div>
              <div className="relative z-10 space-y-4">
                <p className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold italic">Perspective Forum</p>
                <h4 className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-500">Minds in Motion</h4>
                <div className="w-8 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-700" />
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Engage with our flagship debate series exploring diverse geopolitical themes and policy.
                </p>
              </div>
            </Link>

            <Link href="/events/position-paper-submit" className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 transition-all duration-700 relative overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110">
                <Send className="w-12 h-12 text-accent" />
              </div>
              <div className="relative z-10 space-y-4">
                <p className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold italic">Scholarly Portal</p>
                <h4 className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-500">Submit Manuscript</h4>
                <div className="w-8 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-700" />
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors">
                  Lodge your position papers and research for peer review within the vault of thought.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Background glow Decor */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      </section>

      {/* Pillars Section */}
      <section id="initiatives" className="py-40 px-8 md:px-16 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.imgur.com/otf9Hhc.jpg"
            alt="Diplomatic Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.5em] text-accent font-light">Cardinal Pillars</h2>
              <p className="text-3xl md:text-5xl font-serif">Spheres of Influence</p>
            </div>
            <Link href="/2025" className="text-xs uppercase tracking-[0.3em] font-light border-b border-accent/30 pb-2 hover:text-accent hover:border-accent transition-all">
              View MMXXV Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
            {[
              {
                title: "Model United Nations",
                subtitle: "Paradox & IITN MUN",
                desc: "Simulating global governance through specialized councils, focusing on minority rights and constitutional law."
              },
              {
                title: "Policy Deliberation",
                subtitle: "Neeti Sabha",
                desc: "Revisiting national policies through high-level deliberation and governance simulations with sovereign houses."
              },
              {
                title: "Debate Series",
                subtitle: "Minds in Motion",
                desc: "A perspective forum featuring diverse geopolitical themes—from Genz Geopolitics to Feminism Without Colonialism."
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-midnight/80 backdrop-blur-xl border border-white/10 hover:border-accent/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8 font-light italic">{item.subtitle}</p>
                <h3 className="text-2xl font-serif mb-6 text-white/95">{item.title}</h3>
                <div className="w-8 h-[1px] bg-accent/40 mb-8 group-hover:w-full transition-all duration-700" />
                <p className="text-sm font-light text-foreground/60 leading-loose uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Collaborator Logo Modal */}
      {selectedLogo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl transition-all duration-500 animate-fade-in"
          onClick={() => setSelectedLogo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-square p-8 animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute top-4 right-4 z-10 p-3 border border-white/20 bg-background/50 backdrop-blur-sm hover:border-accent/40 transition-all group"
              aria-label="Close"
            >
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/50 group-hover:bg-accent rotate-45 transition-colors" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/50 group-hover:bg-accent -rotate-45 transition-colors" />
              </div>
            </button>

            {/* Logo Display */}
            <div className="relative w-full h-full border border-accent/20 bg-midnight/80 backdrop-blur-sm overflow-hidden">
              <Image
                src={`/assets/collaborators/${selectedLogo.file}`}
                alt={selectedLogo.name}
                fill
                className="object-contain p-8"
              />

              {/* Decorative Border */}
              <div className="absolute -inset-4 border border-accent/20 translate-x-4 translate-y-4 -z-10" />
            </div>

            {/* Logo Name */}
            <div className="mt-6 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-accent font-light">
                {selectedLogo.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
