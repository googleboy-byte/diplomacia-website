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
      <section id="initiatives" className="py-40 px-8 md:px-16 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              <div key={idx} className="group p-8 bg-midnight/20 border border-white/5 hover:border-accent/30 transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent/60 mb-8 font-light italic">{item.subtitle}</p>
                <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
                <div className="w-8 h-[1px] bg-accent/30 mb-8 group-hover:w-full transition-all duration-700" />
                <p className="text-sm font-light text-foreground/50 leading-loose uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 border-t border-white/5 bg-midnight/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
          <Link href="/" className="mb-12 group inline-block">
            <h2 className="text-5xl font-serif gold-text transition-transform duration-700 group-hover:scale-105">Diplomacia</h2>
            <p className="text-[10px] uppercase tracking-[0.8em] opacity-40 mt-4 group-hover:opacity-60 transition-opacity">The World on Trial</p>
          </Link>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] uppercase tracking-[0.4em] opacity-30 mb-16">
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Press Inquiries</a>
          </div>

          <p className="text-[8px] uppercase tracking-widest opacity-20 font-light italic">
            &copy; MMXXIV Diplomacia Society • All Sovereign Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}

