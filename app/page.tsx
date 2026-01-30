import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
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
                  className="absolute animate-fade-in-up transition-transform duration-1000 group/logo"
                  style={{
                    top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 11)}%`,
                    left: `${45 + 40 * Math.cos((i * 2 * Math.PI) / 11)}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 100}ms`
                  }}
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

              <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
              <span className="text-[12rem] font-serif italic opacity-5 select-none absolute -bottom-10 -right-10">D</span>
              <p className="text-xs uppercase tracking-[0.6em] font-light mb-8 opacity-40">Est. 2024</p>
              <h4 className="text-2xl font-serif mb-4">Collaborators</h4>
              {/* <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 mb-8 max-w-[200px] leading-relaxed">
                Strategic alliances with premier academic and diplomatic institutions.
              </p> */}
              <p className="text-[10px] uppercase tracking-[0.3em] font-light text-accent italic">Alliances with fellow societies</p>
            </div>
          </div>
        </div>
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
                title: "Speaker Series",
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

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-midnight/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          {/* Logo & Name */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="group inline-block">
              <div className="relative w-32 h-32 mb-4 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/assets/diplomacialogo.png"
                  alt="Diplomacia Logo"
                  fill
                  className="object-contain opacity-90 contrast-200 brightness-200"
                />
              </div>
              <h2 className="text-3xl font-serif gold-text tracking-widest uppercase">Diplomacia</h2>
              <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 mt-2">The World on Trial</p>
            </Link>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <h3 className="text-xs uppercase tracking-[0.4em] text-accent font-medium">Contact Us</h3>
            <div className="space-y-4 text-center md:text-left">
              <a href="mailto:diplomacia@study.iitm.ac.in" className="block text-sm font-light text-foreground/60 hover:text-accent transition-colors tracking-widest uppercase">
                diplomacia@study.iitm.ac.in
              </a>
              <Link href="/membership" className="inline-block px-6 py-2 border border-accent/20 text-[10px] uppercase tracking-[0.3em] font-light hover:bg-accent hover:text-black transition-all duration-500">
                Join the Society
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <h3 className="text-xs uppercase tracking-[0.4em] text-accent font-medium">Connect</h3>
            <div className="flex gap-8">
              <a href="https://in.linkedin.com/company/iitm-diplomacia" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/iitm_diplomacia" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            <p className="text-[8px] uppercase tracking-widest opacity-20 font-light italic">
              &copy; MMXXIV Diplomacia Society • All Sovereign Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

