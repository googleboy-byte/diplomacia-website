import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const papers = [
  {
    id: "002",
    title: "AI POWERED TRACKING SYSTEMS: SECURITY AS PROTECTION OR SURVEILLANCE OVERREACH",
    author: "Jahanvi Singh",
    category: "Public Policy",
    abstract: "Artificial Intelligence (AI)-powered tracking systems are increasingly being deployed across sectors such as public security (especially women), transportation, and urban governance. These systems leverage technologies like facial recognition, predictive analytics, and real-time data processing to enhance monitoring and response capabilities. On one hand some argue that such systems significantly improve safety, efficiency, and crime prevention and make our life easier while on the other hand, critics raise concerns about privacy violations, mass surveillance, and potential misuse by authorities and rapidly becoming an unethical need. This paper examines the dual nature of AI-powered tracking systems, analyzing their benefits in strengthening security for the public protection while also evaluating the risks of surveillance overreach. It potentially argues that while AI tracking can serve as an effective tool for protection, its unchecked expansion poses serious ethical and legal challenges. Further, the paper concludes by suggesting policy measures to balance security needs with individual rights.",
    pdfPath: "/ppa_pub/002/ppa_002.pdf"
  }
];

export default function PPAArchive() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 md:px-16 lux-gradient overflow-hidden border-b border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent font-light">The Vault of Thought</h2>
          <h1 className="text-4xl md:text-7xl font-serif italic gold-text">Public Policy Archive</h1>
          <p className="text-lg font-light leading-relaxed text-foreground/80 max-w-2xl italic border-l-2 border-accent/20 pl-8">
            "A collection of pivotal research and position papers shaping the discourse on global governance and strategic policy."
          </p>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-24 px-8 md:px-16 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          {papers.map((paper) => (
            <div key={paper.id} className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/40 transition-all duration-700 relative overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] grid grid-cols-1 md:grid-cols-[1fr_256px] gap-8 md:items-start">
              
              {/* Paper Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold px-3 py-1 border border-accent/30 rounded-full bg-accent/10 whitespace-normal text-center">
                    {paper.category}
                  </span>
                  <span className="text-xs text-foreground/50 font-light whitespace-nowrap">Archive Ref: PPA-{paper.id}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-accent transition-colors duration-500 leading-tight">
                  {paper.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-accent/40 group-hover:w-16 transition-all duration-700" />
                  <p className="text-sm uppercase tracking-widest text-foreground/70 font-light">By {paper.author}</p>
                </div>

                <p className="text-sm md:text-base font-light text-foreground/60 leading-loose italic max-w-4xl">
                  {paper.abstract}
                </p>
              </div>

              {/* PDF Preview and Button */}
              <div className="w-full flex flex-col gap-4 md:sticky md:top-32 relative z-10">
                <div className="w-full aspect-[1/1.4] bg-white/5 border border-white/10 group-hover:border-accent/40 transition-all duration-500 overflow-hidden relative shadow-xl">
                  <iframe 
                    src={`${paper.pdfPath}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit`} 
                    className="w-[102%] h-[102%] -top-[1%] -left-[1%] absolute pointer-events-none rounded-sm bg-white" 
                    title={`${paper.title} Preview`}
                  />
                  {/* Subtle inner shadow for depth inside the preview box */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                </div>
                <a 
                  href={paper.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full py-4 text-center border border-accent/50 text-accent hover:bg-accent hover:text-background transition-all duration-500 text-xs uppercase tracking-widest font-bold"
                >
                  View Paper
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
